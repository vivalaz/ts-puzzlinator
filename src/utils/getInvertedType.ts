export const OUTSIDE_EDGE_TYPE = 'outside';
export const INSIDE_EDGE_TYPE = 'inside';

export default function getInvertedType(type: string): string {
    if (type === OUTSIDE_EDGE_TYPE) {
        return INSIDE_EDGE_TYPE;
    }

    return OUTSIDE_EDGE_TYPE;
}