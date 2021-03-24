import { Component, DoCheck, OnInit } from '@angular/core';
import { ViewService } from '../../services/view-service/view.service';
import { NodeView, ViewPosition } from '../../../assets/types';

@Component({
  selector: 'app-main-zone',
  templateUrl: './main-zone.component.html',
  styleUrls: ['./main-zone.component.scss']
})
export class MainZoneComponent implements OnInit, DoCheck
{
  public readonly viewsArray: ReadonlyArray<NodeView>;
  private getAllViewsState = { time: 100, toggle: true };

  constructor(public vService: ViewService)
  {
    this.viewsArray = this.vService.getAll();
  }

  ngOnInit(): void{}
  ngDoCheck(): void{}

  drop(viewId: number, distance: ViewPosition): void
  {
    this.vService.update(viewId, distance);
  }
  deleteView(viewId: number): void
  {
    this.vService.delete(viewId);
  }
}
