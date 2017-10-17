import { Component, OnInit } from '@angular/core';

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
  public acceptedNumberOfActions$: Observable<number>;
  public statusOfMergeMap$: Observable<any>;
  public statusOfSwitchMap$: Observable<any>;
  public totalTimesOfLoop = 5;

  constructor(private store: Store<fromCounters.State>) {
    this.timesOfSwitchMap$ = store.select(fromCounters.getTimesOfSwitchMap);
    this.timesOfMergeMap$ = store.select(fromCounters.getTimesOfMergeMap);
    this.timesOfDebounce$ = store.select(fromCounters.getTimesOfDebounce);
    this.acceptedNumberOfActions$ = store.select(fromCounters.getAcceptedNumberOfActions);
    this.statusOfMergeMap$ = store.select(fromCounters.getStatusOfMergeMap);
    this.statusOfSwitchMap$ = store.select(fromCounters.getStatusOfSwitchMap);
  }

  public sendAnAction(timesOfLoop: number) {
    this.store.dispatch(new counter.Search(timesOfLoop));
  }

  public sendActions(interval) {
    this.store.dispatch(new counter.ResetState());
    let currentLoop = 0;
    let timerInterval = setInterval(() => {
      currentLoop += 1;
      if (currentLoop <= this.totalTimesOfLoop) {
        this.sendAnAction(currentLoop);
      } else {
        clearInterval(timerInterval);
      }
    }, interval);
  }

}
