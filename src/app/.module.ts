import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routes } from './home.routes';
import { HomeComponent } from './home.component';



import { SubNavComponent } from './sub-nav';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductCarouselComponent } from
  '../shared-components/product-carousel/product-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    SubNavComponent,
    CategoryListComponent,
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule,
    StoreModule.forFeature('listings', reducers),
    EffectsModule.forFeature([ListingEffects]),
  ],
  providers: [
    ListingService
  ]
})
export class HomeModule {
  public static routes = routes;
}
