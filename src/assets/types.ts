interface Field{
  type: string;
  name: string;
}

interface NodeData{
  id: number;
  type: string;
  fields: Array<Field>;
}

interface NodeView{
  viewId: number;
  nodeId: number;
  name: string;
  position: { x: number, y: number };
  address: number;
}

export { Field, NodeData, NodeView };
