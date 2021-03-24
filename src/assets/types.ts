export interface Field
{
    type: string;
    name: string;
}

export interface NodeData
{
    id: number;
    type: string;
    fields: Array<Field>;
}

export interface ViewPosition
{
    x: number;
    y: number;
}

export interface NodeView
{
    viewId: number;
    nodeId: number;
    name: string;
    position: ViewPosition;
    address: number;
}
