import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { RepositoryService } from '../services/repository'

import * as repository from '../actions/repository';

@Injectable()
export class RepositoryEffects {
    @Effect()
    public load$: Observable<Action> = this.actions$
        .ofType<repository.Load>(repository.LOAD)
        .switchMap(() => {
            return this.repositoryService
                .load()
                .map((result) => new repository.LoadSuccess(result))
                .catch((err) => of(new repository.LoadFail(err)));
        });

    constructor(
        private actions$: Actions,
        private repositoryService: RepositoryService,
    ) {
    }
}
