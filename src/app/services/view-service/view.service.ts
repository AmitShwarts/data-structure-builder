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
  public AddView(i_NodeTypeId: number, i_NodeTypeName: string): void {
    console.log(`ViewService.AddView(${i_NodeTypeId}, ${i_NodeTypeName})`);

    const item: NodeView = {
      viewId: this.m_CounterId,
      nodeId: i_NodeTypeId,
      name: i_NodeTypeName,
      position: { x: 0, y: 0 },
      address: (this.m_CounterId + 1) * 1000
    };
    this.m_CounterId++;
    this.r_Items.push(item);
    this.m_graph.AddVertex(item);
  }
  public UpdatePosition(i_ItemId: number, i_Distance: ViewPosition): ViewPosition {
    console.log(`ViewService.UpdatePosition(${i_ItemId}, ${i_Distance})`);

    const index = this.r_Items.findIndex(item => item.viewId === i_ItemId);
    this.r_Items[index].position.x += i_Distance.x;
    this.r_Items[index].position.y += i_Distance.y;

    return this.r_Items[index].position;
  }
  public DeleteView(i_ItemId: number): void {
    console.log(`ViewService.DeleteView(${i_ItemId})`);

    const index = this.r_Items.findIndex(item => item.viewId === i_ItemId);
    if (index === -1) { return; }

    this.m_graph.RemoveVertex(this.r_Items[index]);
    this.r_Items.splice(index, 1);
  }
  public ConnectNeighbors(i_view1: NodeView, i_view2: NodeView): void {
    console.log(`ViewService.ConnectNeighbors(${i_view1.viewId}, ${i_view2.viewId})`);
  }
}
