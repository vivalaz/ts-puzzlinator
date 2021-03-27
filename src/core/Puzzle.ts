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
        const result: Array<PuzzleItem> = [];
        const tags = new Map();

        /**
         * generate hashmap of slug edges based on puzzle items, example
         * if first puzzle item has right inside edge with id=1 and bottom outside edge with id=2, then map will generate
         * [
         *  '1-inside': 0 (index of puzzle item),
         *  '2-outside': 0 (index of puzzle item)
         * ]
         */
        this.puzzle.forEach((puzzleItem: PuzzleItem, index: number) => {
            Object.values(puzzleItem.getEdges()).filter(edge => edge).forEach((edge: any) => {
                tags.set(getEdgeSlug(edge.edgeTypeId, edge.type), index)
            })
        });

        // first puzzle item in array ALWAYS valid
        result.push(this.puzzle[0]);

        let counter: number = 0;
        let lastRow: number = 0;

        const matchAndInsertPuzzleItem = (edge: PuzzleEdge, edgeKey: string): void => {
            let edgePattern: string = getEdgeSlug(edge.edgeTypeId, getInvertedType(edge.type));
            const foundPuzzle: PuzzleItem = this.puzzle[tags.get(edgePattern)];

            while (
                !(foundPuzzle.getEdges()[edgeKey] &&
                    foundPuzzle.getEdges()[edgeKey].edgeTypeId === edge.edgeTypeId)
                ) {
                foundPuzzle.rotate();
            }

            result.push(foundPuzzle);
        }

        /** until result array not will be filled iterate over puzzle items
         * firstly search items from left to right, when we reached the last element of the row (not found right edge)
         * then find bottom edge for FIRST element in prev row, when found bottom element - again find from left to right
         */
        while (result.length !== this.puzzle.length) {
            const {right: rightFromLastPuzzle} = result[result.length - 1].getEdges();

            if (rightFromLastPuzzle) {
                matchAndInsertPuzzleItem(rightFromLastPuzzle, 'left');
            } else {
                const {bottom: bottomFromFirstPuzzle} = result[lastRow].getEdges();

                matchAndInsertPuzzleItem(bottomFromFirstPuzzle, 'top');
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