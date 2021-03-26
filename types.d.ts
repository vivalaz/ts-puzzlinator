type PuzzleItemType = {
    id: number,
    edges: {
        top?: {
            edgeTypeId: number,
            type: string
        },
        right?: {
            edgeTypeId: number,
            type: string
        },
        bottom?: {
            edgeTypeId: number,
            type: string
        },
        left?: {
            edgeTypeId: number,
            type: string
        }
    }
}