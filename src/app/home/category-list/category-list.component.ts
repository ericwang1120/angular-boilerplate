
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'category-list',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./category-list.component.css'],
    templateUrl: './category-list.component.html'
})

export class CategoryListComponent {
    public isCollapsed = true;

    public categoryList = [
        { title: 'Antiques & collectables', link: 'Browse' },
        { title: 'Baby gear', link: 'Browse' },
        { title: 'Books', link: 'Browse' },
        { title: 'Building & renovation', link: 'Browse' },
        { title: 'Business, farming & industry', link: 'Browse' },
        { title: 'Clothing & fashion', link: 'Browse' },
        { title: 'Computers', link: 'Browse' },
        { title: 'Electronics & photography', link: 'Browse' },
        { title: 'Gaming', link: 'Browse' },
        { title: 'Health & beauty', link: 'Browse' },
        { title: 'Home & living', link: 'Browse' },
        { title: 'Jewellery & watches', link: 'Browse' },
        { title: 'Mobile phones', link: 'Browse' },
        { title: 'Music & instruments', link: 'Browse' },
        { title: 'Pets & animals', link: 'Browse' },
        { title: 'Sports', link: 'Browse' },
        { title: 'Toys & models', link: 'Browse' },
        { title: 'Last chance', link: 'Browse' },
        { title: 'Services', link: 'Browse' },
        { title: 'Stores', link: 'Browse' },
        { title: 'View all categories ', link: 'Browse' },
    ];

    get firstTwentyList() {
        return this.categoryList.slice(0, 20);
    }
}
