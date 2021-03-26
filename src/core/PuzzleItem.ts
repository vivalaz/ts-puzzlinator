class PuzzleItem {
    static readonly ROTATE_90_DEG = 90;
    static readonly ROTATE_180_DEG = 180;
    static readonly ROTATE_270_DEG = 270;
    static readonly ROTATE_360_DEG = 360;

    private puzzle: PuzzleItemType | null = null;

    constructor(puzzleData: PuzzleItemType) {
        this.puzzle = {...puzzleData};
    }

    rotate(deg: number) {
        switch (deg) {
            case PuzzleItem.ROTATE_90_DEG: {
                this.puzzle = {
                    ...this.puzzle,
                    edges: {
                        top: this.puzzle.edges.left,
                        right: this.puzzle.edges.top,
                        bottom: this.puzzle.edges.right,
                        left: this.puzzle.edges.bottom
                    }
                }
                break;
            }

            case PuzzleItem.ROTATE_180_DEG: {
                break;
            }

            case PuzzleItem.ROTATE_270_DEG: {
                break;
            }

            case PuzzleItem.ROTATE_360_DEG: {
                break;
            }
        }
    }

    get() {
        return this.puzzle;
    }
}

export default PuzzleItem;