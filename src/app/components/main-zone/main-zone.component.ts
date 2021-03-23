import { Component, Input, OnInit } from '@angular/core';
import { ViewService } from '../../services/view-service/view.service';

@Component({
  selector: 'app-main-zone',
  templateUrl: './main-zone.component.html',
  styleUrls: ['./main-zone.component.scss']
})
export class MainZoneComponent implements OnInit{
  constructor(public vService: ViewService){
  }

  ngOnInit(): void{
  }

  drop(viewId: number, distance: { x: number, y: number }): void{
    // TODO : check if objects overlay
    this.vService.update(viewId, distance);
  }
}
