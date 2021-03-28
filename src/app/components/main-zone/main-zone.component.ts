import { Component, DoCheck, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewService } from '../../services/view-service/view.service';
import { NodeView } from '../../../assets/types';
import { ViewNodeComponent } from '../view-node/view-node.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-zone',
  templateUrl: './main-zone.component.html',
  styleUrls: ['./main-zone.component.scss']
})
export class MainZoneComponent implements OnInit, DoCheck {
  public readonly r_ViewsArray: ReadonlyArray<NodeView>;
  @ViewChildren(ViewNodeComponent) m_views!: QueryList<ViewNodeComponent>;

  constructor(private m_vService: ViewService, private m_snackBar: MatSnackBar) {
    this.r_ViewsArray = this.m_vService.GetAll();
  }

  ngOnInit(): void { }
  ngDoCheck(): void { }
  public ConnectNeigbors(i_ViewId: string): void {
    const numberViewId = parseInt(i_ViewId, 10);

    const subsArray = this.m_views.map(view => {
      return view.ObserveClicks().subscribe(observer => {
        if (numberViewId !== observer.viewId) {
          this.m_vService.ConnectNeighbors(this.r_ViewsArray[numberViewId], observer);
        }
      });
    });
    const unSubsriberFunc = (): void => subsArray.forEach(sub => sub.unsubscribe());
    const timeout = setTimeout(unSubsriberFunc, 3000);

    const snackBar = this.m_snackBar.open('Click on the desired neighbor.', 'Cancel', {
      duration: 3000,
      verticalPosition: 'top'
    });

    snackBar.onAction().subscribe(observer => {
      snackBar.dismiss();
      clearTimeout(timeout);
      unSubsriberFunc();
    });
  }
}
