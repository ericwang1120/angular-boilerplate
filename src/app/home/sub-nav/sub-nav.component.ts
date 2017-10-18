
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sub-nav',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./sub-nav.component.css'],
    templateUrl: './sub-nav.component.html'
})

export class SubNavComponent {
    public isCollapsed = true;

    public linkList = [
        { linkPath: '/click-example-page', linkName: 'Browse' },
        { linkPath: '/click-example-page', linkName: 'Sell' },
        { linkPath: '/click-example-page', linkName: 'My Trade Me' },
        { linkPath: '/click-example-page', linkName: 'Community' },
    ];
}
