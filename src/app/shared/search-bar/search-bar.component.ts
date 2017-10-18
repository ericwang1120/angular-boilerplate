
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'search-bar',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./search-bar.component.css'],
    templateUrl: './search-bar.component.html'
})

export class SearchBarComponent {
    public isCollapsed = true;

    public linkList = [
        { linkPath: '/click-example-page', linkName: 'Browse' },
        { linkPath: '/click-example-page', linkName: 'Sell' },
        { linkPath: '/click-example-page', linkName: 'My Trade Me' },
        { linkPath: '/click-example-page', linkName: 'Community' },
    ];
}
