import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './click-example-page.routes';
import { ClickExamplePageComponent } from './click-example-page.component';
import { ResultTableComponent } from './result-table';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../ngrx/counters/reducers';
import { CounterEffects } from '../ngrx/counters/effects/counter';
import { CounterService } from '../ngrx/counters/services/counter.service';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    ClickExamplePageComponent,
    ResultTableComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('counters', reducers),
    EffectsModule.forFeature([CounterEffects]),
  ],
  providers: [
    CounterService
  ]
})
export class ClickExamplePageModule {
  public static routes = routes;
}
