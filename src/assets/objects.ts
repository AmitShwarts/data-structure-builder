export class Vertex<T>
{
    protected static s_CounterId = 0;
    protected readonly r_Id: number;
    protected readonly m_ObjRef: T;

    constructor(obj: T) {
        console.log(Vertex.s_CounterId, 'Vertex constructor');

        this.r_Id = Vertex.s_CounterId++;
        this.m_ObjRef = obj;
    }
    public Equal(other: Vertex<T>): boolean {
        return this.r_Id === other.r_Id;
    }
    public Compare(other: Vertex<T>): number {
        return this.r_Id - other.r_Id;
    }
    public GetRef = (): T => this.m_ObjRef;
    public ToString = (): string => `{Vertex ${this.r_Id}}`;
}

export class Adjacencies<T>
{
    protected static s_CounterId = 0;
    protected readonly r_Id: number;
    protected readonly r_Vertex: Vertex<T>;
    protected readonly r_Adjacency: Set<Vertex<T>>;

    constructor(vertex: Vertex<T>) {
        console.log(Adjacencies.s_CounterId, 'Adjacencies.constructor');

        this.r_Id = Adjacencies.s_CounterId++;
        this.r_Vertex = vertex;
        this.r_Adjacency = new Set();
    }
    public GetVertex = (): Vertex<T> => this.r_Vertex;
    public AddNeighbor(i_Vertex: Vertex<T>): void {
        console.log(this.r_Id, 'Adjacencies.AddNeigbor');

        this.r_Adjacency.add(i_Vertex);
    }
    public RemoveNeighbor(i_Vertex: Vertex<T>): void {
        console.log(this.r_Id, 'Adjacencies.RemoveNeigbor');

        if (this.r_Adjacency.has(i_Vertex)) {
            console.log(`-> removed ${i_Vertex.ToString} from ${this.r_Vertex.ToString}`);
            this.r_Adjacency.delete(i_Vertex);
        }
    }
}
