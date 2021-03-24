import { AfterContentChecked, Component } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterContentChecked
{
    public title: string;

    constructor(public route: Router)
    {
        this.title = String();
    }

    ngAfterContentChecked(): void
    {
        this.route.events.subscribe(data =>
        {
            if(data instanceof ActivationStart)
            {
                this.title = data.snapshot.data.title;
            }
        });
    }
}
