export class Vertex<T>
{
    protected readonly r_VertexId: number;
    protected readonly m_ObjRef: T;

    constructor(vertexId: number, obj: T)
    {
        this.r_VertexId = vertexId;
        this.m_ObjRef = obj;
    }
    public Equal(other: Vertex<T>): boolean
    {
        return this.r_VertexId === other.r_VertexId;
    }
    public Compare(other: Vertex<T>): number
    {
        return this.r_VertexId - other.r_VertexId;
    }
    public GetRef = (): T => this.m_ObjRef;
}

export class Adjacencies<T> extends Vertex<T>
{
    protected readonly r_adjacency: Set<Vertex<T>>;

    constructor(vertexId: number, obj: T)
    {
        super(vertexId, obj);
        this.r_adjacency = new Set();
    }
    AddNeighbor(i_Vertex: Vertex<T>): void
    {
        this.r_adjacency.add(i_Vertex);
    }
    RemoveNeighbor(i_Vertex: Vertex<T>): void
    {
        if (this.r_adjacency.has(i_Vertex))
        {
            this.r_adjacency.delete(i_Vertex);
        }
    }
}
