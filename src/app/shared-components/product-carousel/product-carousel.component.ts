import {
    Component, OnInit, ViewEncapsulation,
    Input, ChangeDetectionStrategy
} from '@angular/core';
import { Product } from '../../ngrx/products/models/product';
import { Listing } from '../../ngrx/listings/models/listing';
import { SingleListing } from '../../ngrx/listings/models/single-listing';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'product-carousel',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./product-carousel.component.css'],
    templateUrl: './product-carousel.component.html',
})

export class ProductCarouselComponent {
    @Input('title') public title: string;
    @Input('products') public products: Product[];
    @Input('listing') public listing: Listing;
    public currentIndex = 0;
    private isVisible = true;

    constructor(private _router: Router) {

    }

    get currentList(): SingleListing[] {
        return this.listing.List.slice(this.currentIndex, this.currentIndex + 5);
    }

    // get number of items to display
    get numToDisplay() {
        return this.listing.TotalCount > this.listing.PageSize ?
            this.listing.PageSize :
            this.listing.TotalCount;
    }

    public changeWithInterval(callback) {
        let i = 0;
        let interval = setInterval(() => {
            i += 1;
            if (i === 5) {
                clearInterval(interval);
            }
            {
                callback();
            }

        }, 25);
    }

    public toRight() {
        this.changeWithInterval(
            () => this.currentIndex += 1
        );
    }

    public toLeft() {
        this.changeWithInterval(
            () => this.currentIndex -= 1
        );
    }

    public selectItem(item: SingleListing) {
        this._router.navigate([`/hero`]);
    }
}
