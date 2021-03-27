import { Injectable } from '@angular/core';
import { NodeView, ViewPosition } from '../../../assets/types';
import { GraphService } from '../graph-service/graph.service';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private readonly r_Items: Array<NodeView>;
  private m_CounterId: number;

  constructor(private m_graph: GraphService) {
    this.r_Items = new Array();
    this.m_CounterId = 0;
  }

  public GetAll(): ReadonlyArray<NodeView> {
    console.log('ViewService.GetAll()');
    return this.r_Items;
  }
  public AddView(nodeTypeId: number, nodeTypeName: string): void {
    console.log(`ViewService.AddView(${nodeTypeId}, ${nodeTypeName})`);

    const item: NodeView = {
      viewId: this.m_CounterId,
      nodeId: nodeTypeId,
      name: nodeTypeName,
      position: { x: 0, y: 0 },
      address: (this.m_CounterId + 1) * 1000
    };
    this.m_CounterId++;
    this.r_Items.push(item);
    this.m_graph.AddVertex(item);
  }
  public UpdatePosition(itemId: number, distance: ViewPosition): ViewPosition {
    console.log(`ViewService.UpdatePosition(${itemId}, ${distance})`);

    const index = this.r_Items.findIndex(item => item.viewId === itemId);
    this.r_Items[index].position.x += distance.x;
    this.r_Items[index].position.y += distance.y;

    return this.r_Items[index].position;
  }
  public DeleteView(itemId: number): void {
    console.log(`ViewService.DeleteView(${itemId})`);

    const index = this.r_Items.findIndex(item => item.viewId === itemId);
    if (index === -1) { return; }

    this.m_graph.RemoveVertex(this.r_Items[index]);
    this.r_Items.splice(index, 1);
  }
}
