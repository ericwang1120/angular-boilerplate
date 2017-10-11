import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { CounterService } from '../services/counter.service'

import * as counter from '../actions/counter';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
    'Search Scheduler'
);


@Injectable()
export class CounterEffects {
    @Effect()
    public searchOfSwitchMap$: Observable<Action> = this.actions$
        .ofType<counter.Search>(counter.SEARCH)
        // .debounceTime(this.debounce, this.scheduler ||. async)
        .map((action) => action.payload)
        .switchMap((query) => {
            return this.counterService
                .count()
                .map((result) => new counter.SearchCompleteOfSwitchMap(result))
                .catch(() => of(new counter.SearchCompleteOfSwitchMap('')));
        });

    @Effect()
    public searchOfMergeMap$: Observable<Action> = this.actions$
        .ofType<counter.Search>(counter.SEARCH)
        // .debounceTime(this.debounce, this.scheduler ||. async)
        .map((action) => action.payload)
        .mergeMap((query) => {
            return this.counterService
                .count()
                .map((result) => new counter.SearchCompleteOfMergeMap(result))
                .catch(() => of(new counter.SearchCompleteOfMergeMap('')));
        });

    @Effect()
    public searchOfDebounce$: Observable<Action> = this.actions$
        .ofType<counter.Search>(counter.SEARCH)
        .debounceTime(3000)
        .map((action) => action.payload)
        .switchMap((query) => {
            return this.counterService
                .count()
                .map((result) => new counter.SearchCompleteOfDebounce(result))
                .catch(() => of(new counter.SearchCompleteOfDebounce('')));
        });

    constructor(
        private actions$: Actions,
        private counterService: CounterService,
        @Optional()
        @Inject(SEARCH_DEBOUNCE)
        private debounce: number = 3000,

        @Optional()
        @Inject(SEARCH_SCHEDULER)
        private scheduler: Scheduler
    ) {
    }
}
