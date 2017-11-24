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
import { UserService } from '../services/user';

import * as user from '../actions/user';

export const LOAD_DEBOUNCE = new InjectionToken<number>('Load Debounce');
export const LOAD_SCHEDULER = new InjectionToken<Scheduler>(
    'Load Scheduler'
);

@Injectable()
export class UserEffects {
    @Effect()
    public load$: Observable<Action> = this.actions$
        .ofType<user.Load>(user.LOAD)
        .debounceTime(this.debounce ? this.debounce : 300, this.scheduler || async)
        .map((user) => user.payload)
        .switchMap((userName) => {
            return this.userService
                .load(userName)
                .map((result) => new user.LoadSuccess(result))
                .catch((err) => of(new user.LoadFail(err)));
        });

    constructor(
        private actions$: Actions,
        private userService: UserService,
        @Optional()
        @Inject(LOAD_DEBOUNCE)
        private debounce,
        @Optional()
        @Inject(LOAD_SCHEDULER)
        private scheduler: Scheduler
    ) {
    }
}
