import PuzzleItem from './PuzzleItem';
import getInvertedType from '../utils/getInvertedType';
import getEdgeSlug from '../utils/getEdgeSlug';

class Puzzle {
    private readonly puzzle: Array<PuzzleItem> = [];

    constructor(input: Array<PuzzleItemType>) {
        this.puzzle = input.reduce((memo: Array<PuzzleItem>, item: PuzzleItemType) => {
            memo.push(new PuzzleItem(item));

            return memo;
        }, [])
    }

    getPuzzle(): Array<PuzzleItem> {
        return this.puzzle;
    }

    solve(): Array<number> {
        const result = [];
        const tags = new Map();

        this.puzzle.forEach((puzzleItem: PuzzleItem, index: number) => {
            Object.values(puzzleItem.getEdges()).filter(edge => edge).forEach((edge: any) => {
                tags.set(getEdgeSlug(edge.edgeTypeId, edge.type), index)
            })
        });

        result.push(this.puzzle[0]);

        let counter = 0;
        let lastRow = 0;

        while (result.length !== this.puzzle.length) {
            const {right: rightFromLastPuzzle} = result[result.length - 1].getEdges();

            if (rightFromLastPuzzle) {
                let edgePattern = getEdgeSlug(rightFromLastPuzzle.edgeTypeId, getInvertedType(rightFromLastPuzzle.type));

                const foundPuzzle = this.puzzle[tags.get(edgePattern)];

                while (
                    !(foundPuzzle.getEdges().left &&
                        foundPuzzle.getEdges().left.edgeTypeId === rightFromLastPuzzle.edgeTypeId)
                    ) {
                    foundPuzzle.rotate();
                }

                result.push(foundPuzzle);
            } else {
                const {bottom: bottomFromFirstPuzzle} = result[lastRow].getEdges();

                if (bottomFromFirstPuzzle) {
                    let edgePattern = getEdgeSlug(bottomFromFirstPuzzle.edgeTypeId, getInvertedType(bottomFromFirstPuzzle.type));

                    const foundPuzzle = this.puzzle[tags.get(edgePattern)];

                    while (
                        !(foundPuzzle.getEdges().top &&
                            foundPuzzle.getEdges().top.edgeTypeId === bottomFromFirstPuzzle.edgeTypeId)
                        ) {
                        foundPuzzle.rotate();
                    }

                    result.push(foundPuzzle);
                }
            }

            counter++;
            if (counter > 0 && counter % Math.sqrt(this.puzzle.length) === 0) {
                lastRow = counter;
            }
        }

        return result.map(p => p.getId());
    }
}

export default Puzzle;