import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node-service/node.service';
import { NodeData } from '../../../assets/types';
import { ViewService } from '../../services/view-service/view.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tools-area',
    templateUrl: './tools-area.component.html',
    styleUrls: ['./tools-area.component.scss']
})
export class ToolsAreaComponent implements OnInit
{
    types: Array<NodeData>;

    constructor(
        private nodeService: NodeService,
        private vService: ViewService,
        public route: Router
    )
    {
        this.types = Array();
    }

    ngOnInit(): void
    {
        this.nodeService.getData().subscribe(data => this.types = data);
    }

    addViewOnClick(nodeId: number, nodeName: string): void
    {
        this.vService.add(nodeId, nodeName);
    }
}
