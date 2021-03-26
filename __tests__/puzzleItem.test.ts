import PuzzleItem from '../src/core/PuzzleItem';
const defaultPuzzleSetting = {
    id: 1,
    edges: {
        top: null,
        right: { edgeTypeId: 7, type: "outside" },
        bottom: { edgeTypeId: 5, type: "inside" },
        left: null,
    },
};

describe('Puzzle Item Instance', () => {
    let puzzle;

    it('creates puzzle item instance', () => {
        puzzle = new PuzzleItem(defaultPuzzleSetting);

        expect(puzzle).toBeInstanceOf(PuzzleItem);
        expect(puzzle.get().id).toEqual(1);
        expect(puzzle.get().edges).toMatchObject({
            top: null,
            right: { edgeTypeId: 7, type: "outside" },
            bottom: { edgeTypeId: 5, type: "inside" },
            left: null,
        });
    });

    it('correctly rotated to 90 deg', () => {
        puzzle.rotate(PuzzleItem.ROTATE_90_DEG);

        expect(puzzle.get().edges).toMatchObject({
            top: null,
            right: null,
            bottom: { edgeTypeId: 7, type: "outside" },
            left: { edgeTypeId: 5, type: "inside" },
        });
    });
});