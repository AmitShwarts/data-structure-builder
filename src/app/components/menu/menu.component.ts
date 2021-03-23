import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentChecked{
  public title: string;

  constructor(public route: Router){
    this.title = String();
  }

  ngAfterContentChecked(): void{
    this.route.events.subscribe(data => {
      if (data instanceof ActivationStart){
        this.title = data.snapshot.data.title;
      }
    });
  }
}
