import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { RepoService } from '../services/repo'

import * as repo from '../actions/repo';

@Injectable()
export class RepoEffects {
    @Effect()
    public load$: Observable<Action> = this.actions$
        .ofType<repo.Load>(repo.LOAD)
        .switchMap(() => {
            return this.repoService
                .load()
                .map((result) => new repo.LoadSuccess(result))
                .catch((err) => of(new repo.LoadFail(err)));
        });

    constructor(
        private actions$: Actions,
        private repoService: RepoService,
    ) {
    }
}
