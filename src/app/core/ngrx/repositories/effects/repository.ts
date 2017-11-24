import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { of } from 'rxjs/observable/of';
import { RepositoryService } from '../services/repository';

import * as repository from '../actions/repository';

export const LOAD_DEBOUNCE = new InjectionToken<number>('Load Debounce');
export const LOAD_SCHEDULER = new InjectionToken<Scheduler>(
    'Load Scheduler'
);

@Injectable()
export class RepositoryEffects {
    @Effect()
    public load$: Observable<Action> = this.actions$
        .ofType<repository.Load>(repository.LOAD)
        .debounceTime(this.debounce ? this.debounce : 300, this.scheduler || async)
        .map((action) => action.payload)
        .switchMap((payload) => {
            return this.repositoryService
                .load(payload)
                .map((result) => new repository.LoadSuccess(result))
                .catch((err) => of(new repository.LoadFail(err)));
        });

    constructor(
        private actions$: Actions,
        private repositoryService: RepositoryService,
        @Optional()
        @Inject(LOAD_DEBOUNCE)
        private debounce,
        @Optional()
        @Inject(LOAD_SCHEDULER)
        private scheduler: Scheduler
    ) { }
}
