import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NodeView } from '../../../assets/types';

@Injectable({
  providedIn: 'root'
})
export class ViewService{
  private readonly url: string;
  items: Array<NodeView>;
  counterId: number;

  constructor(private db: HttpClient){
    this.url = '../assets/main-zone-objects.json';
    this.items = Array();
    this.counterId = 0;
  }

  getViews(): Observable<Array<NodeView>>{
    return this.db.get<Array<NodeView>>(this.url);
  }

  getAll(): Array<NodeView>{
    // TODO : debounce the load. Usage in main-zone..
    console.log('ViewService.getAll()');
    return this.items;
  }

  add(nodeTypeId: number, nodeTypeName: string): void{
    // TODO : fix locaation when added.
    const item: NodeView = {
      viewId: this.counterId,
      nodeId: nodeTypeId,
      name: nodeTypeName,
      position: {x: 0, y: 0},
      address: (this.counterId + 1) * 1000
    };
    this.counterId++;
    this.items.push(item);
  }

  update(itemId: number, distance: { x: number, y: number }): { x: number; y: number }{
    const index = this.items.findIndex(item => item.viewId === itemId);
    if (!isNaN(index)){
      this.items[index].position.x += distance.x;
      this.items[index].position.y += distance.y;
    }
    return this.items[index].position;
  }
}
