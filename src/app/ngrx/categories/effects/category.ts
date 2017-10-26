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
import { CategoryService } from '../services/category.service';
import * as category from '../actions/category';

@Injectable()
export class CategoryEffects {
    @Effect()
    public searchOneDollar$: Observable<Action> = this.actions$
        .ofType<category.SearchLevelOne>(category.SEARCH_LEVEL_ONE)
        // .debounceTime(this.debounce, this.scheduler ||. async)
        .switchMap(() => {
            return this.categoryService
                .search(1)
                .map((result) => new category.SearchLevelOneComplete(result))
                .catch(() => of(new category.SearchLevelOneComplete(null)));
        });

    constructor(
        private actions$: Actions,
        private categoryService: CategoryService,
    ) {
    }
}
