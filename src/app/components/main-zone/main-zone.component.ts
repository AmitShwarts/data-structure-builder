import { Component, DoCheck, OnInit } from '@angular/core';
import { ViewService } from '../../services/view-service/view.service';
import { NodeView, ViewPosition } from '../../../assets/types';

@Component({
  selector: 'app-main-zone',
  templateUrl: './main-zone.component.html',
  styleUrls: ['./main-zone.component.scss']
})
export class MainZoneComponent implements OnInit, DoCheck {
  public readonly viewsArray: ReadonlyArray<NodeView>;

  constructor(public vService: ViewService) {
    this.viewsArray = this.vService.GetAll();
  }

  ngOnInit(): void { }
  ngDoCheck(): void { }

  drop(viewId: number, distance: ViewPosition): void {
    this.vService.UpdatePosition(viewId, distance);
  }
  deleteView(viewId: number): void {
    this.vService.DeleteView(viewId);
  }
}
