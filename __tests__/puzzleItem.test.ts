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
        expect(puzzle.get().edges).toMatchObject({
            top: null,
            right: { edgeTypeId: 7, type: "outside" },
            bottom: { edgeTypeId: 5, type: "inside" },
            left: null,
        });
    });

    it('get correct id', () => {
       expect(puzzle.getId()).toEqual(1);
    });

    it('get correct edges', () => {
        expect(puzzle.getEdges()).toMatchObject({
            top: null,
            right: { edgeTypeId: 7, type: "outside" },
            bottom: { edgeTypeId: 5, type: "inside" },
            left: null,
        });
    });

    it('correctly rotated to 90 deg', () => {
        puzzle.rotate();

        expect(puzzle.get().edges).toMatchObject({
            top: null,
            right: null,
            bottom: { edgeTypeId: 7, type: "outside" },
            left: { edgeTypeId: 5, type: "inside" },
        });
    });

    it('correctly rotated to 180 deg', () => {
        puzzle.rotate();

        expect(puzzle.get().edges).toMatchObject({
            top: { edgeTypeId: 5, type: "inside" },
            right: null,
            bottom: null,
            left: { edgeTypeId: 7, type: "outside" },
        });
    });

    it('correctly rotated to 270 deg', () => {
        puzzle.rotate();

        expect(puzzle.get().edges).toMatchObject({
            top: { edgeTypeId: 7, type: "outside" },
            right: { edgeTypeId: 5, type: "inside" },
            bottom: null,
            left: null,
        });
    });

    it('correctly rotated to 360 deg', () => {
        puzzle.rotate();

        expect(puzzle.get().edges).toMatchObject(defaultPuzzleSetting.edges);
    });

    it('correctly rotated at once to 270 deg', () => {
        puzzle.rotate();
        puzzle.rotate();
        puzzle.rotate();

        expect(puzzle.get().edges).toMatchObject({
            top: { edgeTypeId: 7, type: "outside" },
            right: { edgeTypeId: 5, type: "inside" },
            bottom: null,
            left: null,
        });
    });
});