import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../ngrx/categories/reducers';
import { CategoryEffects } from '../ngrx/categories/effects/category';
import { CategoryService } from '../ngrx/categories/services/category.service';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    StoreModule.forFeature('categories', reducers),
    EffectsModule.forFeature([CategoryEffects]),
  ],
  providers: [
    CategoryService
  ],
  exports: [NavBarComponent]
})
export class SharedModule {
}
