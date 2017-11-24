import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { empty } from 'rxjs/observable/empty';
import { EventEffects, LOAD_SCHEDULER, LOAD_DEBOUNCE } from './event';
import { EventService } from '../services/event';
import { Observable } from 'rxjs/Observable';
import { Load, LoadSuccess, LoadFail } from '../actions/event';
import { Event, generateMockEvent } from '../models/event';

export class TestActions extends Actions {
    constructor() {
        super(empty());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

describe('EventEffects', () => {
    let effects: EventEffects;
    let eventService: any;
    let actions$: TestActions;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                EventEffects,
                {
                    provide: EventService,
                    useValue: jasmine.createSpyObj('eventService', ['load']),
                },
                { provide: Actions, useFactory: getActions },
                { provide: LOAD_SCHEDULER, useFactory: getTestScheduler },
                { provide: LOAD_DEBOUNCE, useValue: 30 },
            ],
        });

        effects = TestBed.get(EventEffects);
        eventService = TestBed.get(EventService);
        actions$ = TestBed.get(Actions);
    });

    describe('load$', () => {
        it('should load successful', () => {
            const event1 = generateMockEvent();
            const event2 = { ...event1, id: '222' };
            const events = [event2, event2];

            const action = new Load('username');
            const completion = new LoadSuccess(events);

            actions$.stream = hot('-a----', { a: action });
            const response = cold('-a|', { a: events });
            const expected = cold('-----b', { b: completion });
            eventService.load = () => response;
            expect(effects.load$).toBeObservable(expected);
        });

        it('should load fail', () => {
            const action = new Load('username');
            const completion = new LoadFail('Unexpected Error. Try again later.');
            const error = 'Unexpected Error. Try again later.';

            actions$.stream = hot('-a----', { a: action });
            const response = cold('-#|', {}, error);
            const expected = cold('-----b', { b: completion });
            eventService.load = () => response;

            expect(effects.load$).toBeObservable(expected);
        });
    });
});
