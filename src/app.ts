import mocked3x3Puzzle from './mocks/3x3';
import Puzzle from './core/Puzzle';

const puzzle = new Puzzle(mocked3x3Puzzle);
puzzle.solve();