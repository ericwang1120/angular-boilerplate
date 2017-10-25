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
import { ListingService } from '../services/listing.service'

import * as listing from '../actions/listing';

@Injectable()
export class ListingEffects {
    @Effect()
    public searchOneDollar$: Observable<Action> = this.actions$
        .ofType<listing.SearchOneDollar>(listing.SEARCH_ONE_DOLLAR)
        // .debounceTime(this.debounce, this.scheduler ||. async)
        .switchMap(() => {
            return this.listingService
                .search('oneDollar')
                .map((result) => new listing.SearchOneDollarComplete(result))
                .catch(() => of(new listing.SearchOneDollarComplete(null)));
        });

    @Effect()
    public searchClosing$: Observable<Action> = this.actions$
        .ofType<listing.SearchClosing>(listing.SEARCH_CLOSING)
        // .debounceTime(this.debounce, this.scheduler ||. async)
        .switchMap(() => {
            return this.listingService
                .search('closing')
                .map((result) => new listing.SearchClosingComplete(result))
                .catch(() => of(new listing.SearchClosingComplete(null)));
        });

    @Effect()
    public searchLatest$: Observable<Action> = this.actions$
        .ofType<listing.SearchLatest>(listing.SEARCH_LATEST)
        // .debounceTime(this.debounce, this.scheduler ||. async)
        .switchMap(() => {
            return this.listingService
                .search('latest')
                .map((result) => new listing.SearchLatestComplete(result))
                .catch(() => of(new listing.SearchLatestComplete(null)));
        });

    constructor(
        private actions$: Actions,
        private listingService: ListingService,
    ) {
    }
}
