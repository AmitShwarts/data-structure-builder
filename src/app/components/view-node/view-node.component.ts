import { Component, OnInit, Input, Output } from '@angular/core';
import { ViewService } from 'src/app/services/view-service/view.service';
import { NodeView, ViewPosition } from 'src/assets/types';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-node',
  templateUrl: './view-node.component.html',
  styleUrls: ['./view-node.component.scss']
})
export class ViewNodeComponent implements OnInit {
  @Input() view!: NodeView;
  @Output() ConnectNeighborsEvent = new EventEmitter();
  private m_ShoutClick$ = new Subject<NodeView>();

  constructor(private m_vService: ViewService) { }

  ngOnInit(): void {
  }
  public Drop(i_ViewId: number, i_Distance: ViewPosition): void {
    this.m_vService.UpdatePosition(i_ViewId, i_Distance);
  }
  public DeleteView(i_ViewId: number): void {
    this.m_vService.DeleteView(i_ViewId);
  }
  public ConnectNeigbors(i_ViewId: number): void {
    this.ConnectNeighborsEvent.emit(i_ViewId.toString());
  }
  public Click(): void {
    this.m_ShoutClick$.next(this.view);
  }
  public ObserveClicks(): Subject<NodeView> {
    return this.m_ShoutClick$;
  }
}
