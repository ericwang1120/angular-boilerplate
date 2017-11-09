import { EventService } from './../../core/ngrx/events/services/event';
import { EventEffects } from './../../core/ngrx/events/effects/event';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RepositoryTableComponent } from './repository-table/repository-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatButtonModule, MatListModule, MatInputModule, MatCardModule }
  from '@angular/material';
import { UserEventComponent } from './user-event/user-event.component';

// lazy loading
import { RouterModule } from '@angular/router';
import { routes } from './home-page.routes';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../../core/ngrx/repositories/reducers';
import * as fromEvents from '../../core/ngrx/events/reducers';
import { RepositoryEffects } from '../../core/ngrx/repositories/effects/repository';
import { RepositoryService } from '../../core/ngrx/repositories/services/repository';

@NgModule({
  declarations: [
    HomePageComponent,
    RepositoryTableComponent,
    SearchBarComponent
    ,
    UserEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('repositories', reducers),
    StoreModule.forFeature('events', fromEvents.reducers),
    EffectsModule.forFeature([RepositoryEffects, EventEffects]),
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    RepositoryService,
    EventService
  ]
})
export class HomePageModule {
}
