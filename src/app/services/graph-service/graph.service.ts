import { Injectable } from '@angular/core';
import { Adjacencies, Vertex } from 'src/assets/objects';
import { NodeView } from 'src/assets/types';

interface Pair {
  first: Vertex<NodeView>;
  second: Adjacencies<NodeView>;
}
@Injectable({
  providedIn: 'root'
})

export class GraphService {
  private readonly r_ViewMap: Map<NodeView, Pair>;

  constructor() {
    /*
     TODO : need observable on ViewService when delete view,
            and delete the vertex match for this view
            from this.vertices and from every adjacency lists.
     */
    this.r_ViewMap = new Map();
  }
  public AddVertex(i_NewView: NodeView): void {
    console.log(`GraphService.AddVertex(${i_NewView.name}, ${i_NewView.viewId})`);

    if (!this.r_ViewMap.has(i_NewView)) {
      const newVertex = new Vertex<NodeView>(i_NewView);
      const newAdjacency = new Adjacencies<NodeView>(newVertex);
      this.r_ViewMap.set(i_NewView, { first: newVertex, second: newAdjacency });
    }
  }
  public RemoveVertex(i_View: NodeView): void {
    console.log(`GraphService.RemoveVertex(${i_View.name}, ${i_View.viewId})`);
    const pairRef = this.r_ViewMap.get(i_View);
    if (pairRef === undefined) { return; }

    for (const pair of this.r_ViewMap.values()) {
      pair.second.RemoveNeighbor(pairRef.first);
    }

    this.r_ViewMap.delete(i_View);
  }
  public ConnectNeigbors(i_View1: NodeView, i_View2: NodeView): void {
    console.log(`GraphService.ConnectNeigbors(${i_View1.viewId}, ${i_View2.viewId})`);

    if (!(this.r_ViewMap.has(i_View1) && this.r_ViewMap.get(i_View2))) {
      console.warn(`some of them dont exist`);
      return;
    }
  }
  public DisconnectNeighbors(i_View1: NodeView, i_View2: NodeView): void {
    console.log(`GraphService.DisconnectNeighbors(${i_View1.viewId}, ${i_View2.viewId})`);

    if (!(this.r_ViewMap.has(i_View1) && this.r_ViewMap.get(i_View2))) {
      console.warn(`some of them dont exist`);
      return;
    }
  }
}
