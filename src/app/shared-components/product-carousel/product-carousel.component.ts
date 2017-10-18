import {
    Component, OnInit, ViewEncapsulation,
    Input
} from '@angular/core';
import { Product } from '../../ngrx/products/models/product';

@Component({
    selector: 'product-carousel',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./product-carousel.component.css'],
    templateUrl: './product-carousel.component.html'
})

export class ProductCarouselComponent {
    @Input('products') public products: Product[];
}
