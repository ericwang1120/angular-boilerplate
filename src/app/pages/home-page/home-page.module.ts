import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';

// lazy loading
import { RouterModule } from '@angular/router';
import { routes } from './home-page.routes';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../../core/ngrx/repositories/reducers';
import { RepositoryEffects } from '../../core/ngrx/repositories/effects/repository';
import { RepositoryService } from '../../core/ngrx/repositories/services/repository';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('repositories', reducers),
    EffectsModule.forFeature([RepositoryEffects]),
  ],
  providers: [
    RepositoryService,
  ]
})
export class HomePageModule {
}
