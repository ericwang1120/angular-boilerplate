
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
        { title: 'Antiques & collectables', link: ['antiques-collectables', 12] },
        { title: 'Baby gear', link: ['baby-gear'] },
        { title: 'Books', link: ['books'] },
        { title: 'Building & renovation', link: ['building-renovation'] },
        { title: 'Business, farming & industry', link: ['business-farming-industry'] },
        { title: 'Clothing & fashion', link: ['clothing-fashion'] },
        { title: 'Computers', link: ['computers'] },
        { title: 'Electronics & photography', link: 'electronics-photography' },
        { title: 'Gaming', link: 'gaming' },
        { title: 'Health & beauty', link: 'health-beauty' },
        { title: 'Home & living', link: 'home-living' },
        { title: 'Jewellery & watches', link: 'jewellery-watches' },
        { title: 'Mobile phones', link: 'mobile-phones' },
        { title: 'Music & instruments', link: 'music-instruments' },
        { title: 'Pets & animals', link: 'pets-animals' },
        { title: 'Sports', link: 'sports' },
        { title: 'Toys & models', link: 'toys-models' },
        { title: 'Last chance', link: 'lastchance' },
        { title: 'Services', link: 'services' },
        { title: 'Stores', link: 'stores' },
        { title: 'View all categories ', link: 'browse' },
    ];

    get firstTwentyList() {
        return this.categoryList.slice(0, 20);
    }
}
