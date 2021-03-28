import { AfterContentChecked, Component } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentChecked {
    public m_Title: string;

    constructor(public route: Router) {
        this.m_Title = String();
    }

    ngAfterContentChecked(): void {
        this.route.events.subscribe(data => {
            if (data instanceof ActivationStart) {
                this.m_Title = data.snapshot.data.title;
            }
        });
    }
}
