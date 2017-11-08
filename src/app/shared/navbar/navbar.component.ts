
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html'
})

export class NavBarComponent {
    public isCollapsed = true;

    public linkList = [
        { linkPath: '/home', linkName: 'Home' },
        { linkPath: '/chart-page', linkName: 'Charts' },
    ];
}
