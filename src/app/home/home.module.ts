import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './home.routes';
import { HomeComponent } from './home.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../ngrx/counters/reducers';
import { CounterEffects } from '../ngrx/counters/effects/counter';
import { CounterService } from '../ngrx/counters/services/counter.service';
import { SubNavComponent } from './sub-nav';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductCarouselComponent }
  from '../shared-components/product-carousel/product-carousel.component';

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
    // StoreModule.forFeature('counters', reducers),
    // EffectsModule.forFeature([CounterEffects]),
  ],
  providers: [
    CounterService
  ]
})
export class HomeModule {
  public static routes = routes;
}
