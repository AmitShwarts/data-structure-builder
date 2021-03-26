import { Injectable } from '@angular/core';
import { NodeView, ViewPosition } from '../../../assets/types';

@Injectable({
  providedIn: 'root'
})
export class ViewService
{
  private readonly r_Items: Array<NodeView>;
  private m_CounterId: number;

  constructor()
  {
    this.r_Items = new Array();
    this.m_CounterId = 0;
  }

  getAll(): ReadonlyArray<NodeView>
  {
    console.log('ViewService.getAll()');
    return this.r_Items;
  }
  add(nodeTypeId: number, nodeTypeName: string): void
  {
    console.log(`ViewService.add(${nodeTypeId}, ${nodeTypeName})`);

    const item: NodeView = {
      viewId: this.m_CounterId,
      nodeId: nodeTypeId,
      name: nodeTypeName,
      position: { x: 0, y: 0 },
      address: (this.m_CounterId + 1) * 1000
    };
    this.m_CounterId++;
    this.r_Items.push(item);
  }
  update(itemId: number, distance: ViewPosition): ViewPosition
  {
    console.log(`ViewService.update(${itemId}, ${distance})`);

    const index = this.r_Items.findIndex(item => item.viewId === itemId);
    this.r_Items[index].position.x += distance.x;
    this.r_Items[index].position.y += distance.y;
    return this.r_Items[index].position;
  }
  delete(itemId: number): void
  {
    console.log(`ViewService.delete(${itemId})`);

    const index = this.r_Items.findIndex(item => item.viewId === itemId);
    this.r_Items.splice(index, 1);
  }
}
