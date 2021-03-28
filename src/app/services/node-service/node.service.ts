import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NodeData } from '../../../assets/types';

@Injectable({
    providedIn: 'root'
})
export class NodeService {
    private readonly i_Url: string;

    constructor(private db: HttpClient) {
        this.i_Url = '../assets/nodes.json';
    }

    public GetData(): Observable<Array<NodeData>> {
        return this.db.get<Array<NodeData>>(this.i_Url);
    }
}
