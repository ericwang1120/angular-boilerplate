import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { EventService } from '../services/event';

import * as event from '../actions/event';

@Injectable()
export class EventEffects {
    @Effect()
    public load$: Observable<Action> = this.actions$
        .ofType<event.Load>(event.LOAD)
        .debounceTime(500)
        .map((action) => action.payload)
        .switchMap((payload) => {
            return this.eventService
                .load(payload)
                .map((result) => new event.LoadSuccess(result))
                .catch((err) => of(new event.LoadFail(err)));
        });

    constructor(
        private actions$: Actions,
        private eventService: EventService,
    ) {
    }
}
