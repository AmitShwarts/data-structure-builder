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
export class ToolsAreaComponent implements OnInit {
    public m_Types: Array<NodeData>;

    constructor(
        private nodeService: NodeService,
        private vService: ViewService,
        public route: Router
    ) {
        this.m_Types = new Array();
    }

    ngOnInit(): void {
        this.nodeService.GetData().subscribe(data => this.m_Types = data);
    }

    public AddViewOnClick(i_NodeId: number, i_NodeName: string): void {
        this.vService.AddView(i_NodeId, i_NodeName);
    }
}
