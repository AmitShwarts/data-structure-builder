import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NodeData } from '../../../assets/types';

@Injectable({
    providedIn: 'root'
})
export class NodeService
{
    private readonly url: string;

    constructor(private db: HttpClient)
    {
        this.url = '../assets/nodes.json';
    }

    getData(): Observable<Array<NodeData>>
    {
        return this.db.get<Array<NodeData>>(this.url);
    }
}
