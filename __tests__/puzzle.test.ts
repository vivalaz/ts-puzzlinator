import mocked3x3Puzzle from '../src/mocks/3x3';
import Puzzle from '../src/core/Puzzle';
import PuzzleItem from '../src/core/PuzzleItem';

describe('Puzzle Instance', () => {
    it('successfully creates new puzzles', () => {
        let puzzles = new Puzzle(mocked3x3Puzzle);

        expect(puzzles).toBeInstanceOf(Puzzle);
        expect(puzzles.getPuzzle().length).toBe(mocked3x3Puzzle.length);

        puzzles.getPuzzle().forEach((puzzle: PuzzleItem, index: number) => {
            expect(puzzle).toBeInstanceOf(PuzzleItem);
            expect(puzzle.get()).toMatchObject(mocked3x3Puzzle[index]);
        });
    });

    it('successfully creates new empty puzzles', () => {
        let puzzles = new Puzzle([]);

        expect(puzzles).toBeInstanceOf(Puzzle);
        expect(puzzles.getPuzzle().length).toBe(0);
    });

    it('correctly solves 3x3 using item by item algorithm', () => {
        let puzzles = new Puzzle(mocked3x3Puzzle);
        const result = [1, 4, 2, 9, 6, 7, 8, 3, 5];

        expect(puzzles.solveItemByItem()).toEqual(result);
    });
});