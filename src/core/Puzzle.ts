import PuzzleItem from './PuzzleItem';

class Puzzle {
    private readonly puzzle: Array<PuzzleItem> = [];

    constructor(input: Array<PuzzleItemType>) {
        this.puzzle = input.reduce((memo: Array<PuzzleItem>, item: PuzzleItemType) => {
            memo.push(new PuzzleItem(item));

            return memo;
        }, [])
    }

    getPuzzle() {
        return this.puzzle;
    }
}

export default Puzzle;