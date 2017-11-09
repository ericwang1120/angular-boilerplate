import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRepositories from '../../core/ngrx/repositories/reducers';
import * as repository from '../../core/ngrx/repositories/actions/repository';
import { Repository } from '../../core/ngrx/repositories/models/repository';

import * as fromEvents from '../../core/ngrx/events/reducers';
import * as event from '../../core/ngrx/events/actions/event';
import { Event } from './../../core/ngrx/events/models/event';

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  public repositories$: Observable<Repository[]>;
  public loading$: Observable<boolean>;

  public events$: Observable<Event[]>;
  public eventLoading$: Observable<boolean>;

  public userName = 'EricWang1120';

  constructor(
    private store: Store<fromRepositories.State>
  ) {
    this.repositories$ = store.select(fromRepositories.getRepositories);
    this.loading$ = store.select(fromRepositories.getLoading);

    // event
    this.events$ = store.select(fromEvents.getEvents);
    this.eventLoading$ = store.select(fromEvents.getLoading);
  }

  public ngOnInit(): void {
    this.load(this.userName);
  }

  public load(userName: string) {
    this.userName = userName;
    this.store.dispatch(new repository.Load(userName));
    this.store.dispatch(new event.Load(userName));
  }

}
