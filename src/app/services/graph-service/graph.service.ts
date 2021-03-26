import { Injectable } from '@angular/core';
import { Adjacencies, Vertex } from 'src/assets/objects';
import { NodeView } from 'src/assets/types';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  public readonly r_Vertices: Array<Adjacencies<NodeView>>;
  private m_CounterId: number;

  constructor()
  {
    /*
     TODO : need observable on ViewService when delete view,
            and delete the vertex match for this view
            from this.vertices and from every adjacency lists.
     */
    this.r_Vertices = new Array();
    this.m_CounterId = 0;
  }
  public AddVertex(i_NewVertex: NodeView): void
  {
    const compare = (a: Vertex<NodeView>): boolean => {
      return a.GetRef().viewId === i_NewVertex.viewId;
    };
    if (!this.r_Vertices.some(compare))
    {
      const vertexAdjacency = new Adjacencies(this.m_CounterId, i_NewVertex);
      this.r_Vertices.push(vertexAdjacency);
    }
  }
  public RemoveVertex(io_Vertex: NodeView): void
  {
    // 1. find the view's vertex

    // 2. delete it from adjancies
    for (const list of this.r_Vertices)
    {
    }

    // 3. delete it from r_Vertices
  }
}
