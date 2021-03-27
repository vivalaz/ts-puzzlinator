import getInvertedType, {OUTSIDE_EDGE_TYPE, INSIDE_EDGE_TYPE} from '../src/utils/getInvertedType';
import getEdgeSlug from '../src/utils/getEdgeSlug';

describe('Test utils', () => {
    it('generate valid slug', () => {
       expect(getEdgeSlug(1, 'inside')).toEqual('1-inside')
       expect(getEdgeSlug(3, 'outside')).toEqual('3-outside')
    });

    it('get inverted type', () => {
       expect(getInvertedType(OUTSIDE_EDGE_TYPE)).toEqual(INSIDE_EDGE_TYPE);
       expect(getInvertedType(INSIDE_EDGE_TYPE)).toEqual(OUTSIDE_EDGE_TYPE);
    });
});