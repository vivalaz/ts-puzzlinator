class PuzzleItem {
    private puzzle: PuzzleItemType;

    constructor(puzzleData: PuzzleItemType) {
        this.puzzle = {...puzzleData};
    }

    rotate(): PuzzleItemType {
        this.puzzle = {
            ...this.puzzle,
            edges: {
                top: this.puzzle.edges.left,
                right: this.puzzle.edges.top,
                bottom: this.puzzle.edges.right,
                left: this.puzzle.edges.bottom
            }
        };

        return this.puzzle;
    }

    get(): PuzzleItemType {
        return this.puzzle;
    }
}

export default PuzzleItem;