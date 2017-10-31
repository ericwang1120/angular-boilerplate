
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'nav-bar',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./nav-bar.component.css'],
    templateUrl: './nav-bar.component.html'
})

export class NavBarComponent {
    public isCollapsed = true;

    public linkList = [
        { linkPath: '/click-example', linkName: 'Stream Thinking' },
    ];
}
