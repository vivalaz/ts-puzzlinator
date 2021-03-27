type PuzzleItemType = {
    id: number,
    edges: PuzzleEdges
}

type PuzzleEdges = {
    top?: PuzzleEdge,
    right?: PuzzleEdge,
    bottom?: PuzzleEdge,
    left?: PuzzleEdge
}

type PuzzleEdge = {
    edgeTypeId: number,
    type: string
}