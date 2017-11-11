import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { UserService } from '../services/user';

import * as user from '../actions/user';

@Injectable()
export class UserEffects {
    @Effect()
    public load$: Observable<Action> = this.actions$
        .ofType<user.Load>(user.LOAD)
        .debounceTime(500)
        .map((user) => user.name)
        .switchMap((id) => {
            return this.userService
                .load(id)
                .map((result) => new user.LoadSuccess(result))
                .catch((err) => of(new user.LoadFail(err)));
        });

    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) {
    }
}
