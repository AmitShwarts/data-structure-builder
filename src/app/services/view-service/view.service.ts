import { Injectable } from '@angular/core';
import { NodeView, ViewPosition } from '../../../assets/types';

@Injectable({
  providedIn: 'root'
})
export class ViewService
{
  private readonly items: Array<NodeView>;
  private counterId: number;

  constructor()
  {
    this.items = Array();
    this.counterId = 0;
  }

  getAll(): ReadonlyArray<NodeView>
  {
    console.log('ViewService.getAll()');

    return this.items;
  }
  add(nodeTypeId: number, nodeTypeName: string): void
  {
    console.log(`ViewService.add(${nodeTypeId}, ${nodeTypeName})`);

    const item: NodeView = {
      viewId: this.counterId,
      nodeId: nodeTypeId,
      name: nodeTypeName,
      position: { x: 0, y: 0 },
      address: (this.counterId + 1) * 1000
    };
    this.counterId++;
    this.items.push(item);
  }
  update(itemId: number, distance: ViewPosition): ViewPosition
  {
    console.log(`ViewService.update(${itemId}, ${distance})`);

    const index = this.items.findIndex(item => item.viewId === itemId);
    this.items[index].position.x += distance.x;
    this.items[index].position.y += distance.y;
    return this.items[index].position;
  }
  delete(itemId: number): void
  {
    console.log(`ViewService.delete(${itemId})`);

    const index = this.items.findIndex(item => item.viewId === itemId);
    this.items.splice(index, 1);
  }
}
