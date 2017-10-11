import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromCounters from '../ngrx/counters/reducers';
import * as counter from '../ngrx/counters/actions/counter';

@Component({
  selector: 'click-example-page',
  templateUrl: './click-example-page.component.html'
})
export class ClickExamplePageComponent {
  public timesOfSwitchMap$: Observable<number>;
  public timesOfMergeMap$: Observable<number>;
  public timesOfDebounce$: Observable<number>;

  constructor(private store: Store<fromCounters.State>) {
    this.timesOfSwitchMap$ = store.select(fromCounters.getTimesOfSwitchMap);
    this.timesOfMergeMap$ = store.select(fromCounters.getTimesOfMergeMap);
    this.timesOfDebounce$ = store.select(fromCounters.getTimesOfDebounce);
  }

  public search(query: string) {
    this.store.dispatch(new counter.Search(query));
  }

}
