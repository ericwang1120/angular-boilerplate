import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { empty } from 'rxjs/observable/empty';
import { UserEffects, LOAD_SCHEDULER, LOAD_DEBOUNCE } from './user';
import { UserService } from '../services/user';
import { Observable } from 'rxjs/Observable';
import { Load, LoadSuccess, LoadFail } from '../actions/user';
import { User, generateMockUser } from '../models/user';

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

describe('UserEffects', () => {
    let effects: UserEffects;
    let userService: any;
    let actions$: TestActions;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                UserEffects,
                {
                    provide: UserService,
                    useValue: jasmine.createSpyObj('userService', ['load']),
                },
                { provide: Actions, useFactory: getActions },
                { provide: LOAD_SCHEDULER, useFactory: getTestScheduler },
                { provide: LOAD_DEBOUNCE, useValue: 30 },
            ],
        });

        effects = TestBed.get(UserEffects);
        userService = TestBed.get(UserService);
        actions$ = TestBed.get(Actions);
    });

    describe('load$', () => {
        it('should load successful', () => {
            const user1 = generateMockUser();

            const action = new Load('userName');
            const completion = new LoadSuccess(user1);

            actions$.stream = hot('-a----', { a: action });
            const response = cold('-a|', { a: user1 });
            const expected = cold('-----b', { b: completion });
            userService.load = () => response;
            expect(effects.load$).toBeObservable(expected);
        });

        it('should load fail', () => {
            const action = new Load('userName');
            const completion = new LoadFail('Unexpected Error. Try again later.');
            const error = 'Unexpected Error. Try again later.';

            actions$.stream = hot('-a----', { a: action });
            const response = cold('-#|', {}, error);
            const expected = cold('-----b', { b: completion });
            userService.load = () => response;

            expect(effects.load$).toBeObservable(expected);
        });
    });
});
