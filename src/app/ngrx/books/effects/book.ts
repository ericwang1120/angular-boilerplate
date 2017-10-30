import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { BookService } from '../services/book'

import * as book from '../actions/book';

@Injectable()
export class BookEffects {
    @Effect()
    public load$: Observable<Action> = this.actions$
        .ofType<book.Load>(book.LOAD)
        .switchMap(() => {
            return this.bookService
                .load()
                .map((result) => new book.LoadSuccess(result))
                .catch((err) => of(new book.LoadFail(err)));
        });

    constructor(
        private actions$: Actions,
        private bookService: BookService,
    ) {
    }
}
