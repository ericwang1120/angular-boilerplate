import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot, getTestScheduler } from 'jasmine-marbles';
import { empty } from 'rxjs/observable/empty';
import { RepositoryEffects, LOAD_SCHEDULER, LOAD_DEBOUNCE } from './repository';
import { RepositoryService } from '../services/repository';
import { Observable } from 'rxjs/Observable';
import { Load, LoadSuccess, LoadFail } from '../actions/repository';
import { Repository, generateMockRepository } from '../models/repository';

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

describe('RepositoryEffects', () => {
    let effects: RepositoryEffects;
    let repositoryService: any;
    let actions$: TestActions;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RepositoryEffects,
                {
                    provide: RepositoryService,
                    useValue: jasmine.createSpyObj('repositoryService', ['load']),
                },
                { provide: Actions, useFactory: getActions },
                { provide: LOAD_SCHEDULER, useFactory: getTestScheduler },
                { provide: LOAD_DEBOUNCE, useValue: 30 },
            ],
        });

        effects = TestBed.get(RepositoryEffects);
        repositoryService = TestBed.get(RepositoryService);
        actions$ = TestBed.get(Actions);
    });

    describe('load$', () => {
        it('should load successful', () => {
            const repository1 = generateMockRepository();
            const repository2 = { ...repository1, id: '222' };
            const repositories = [repository2, repository2];

            const action = new Load('username');
            const completion = new LoadSuccess(repositories);

            actions$.stream = hot('-a----', { a: action });
            const response = cold('-a|', { a: repositories });
            const expected = cold('-----b', { b: completion });
            repositoryService.load = () => response;
            expect(effects.load$).toBeObservable(expected);
        });

        it('should load fail', () => {
            const action = new Load('username');
            const completion = new LoadFail('Unexpected Error. Try again later.');
            const error = 'Unexpected Error. Try again later.';

            actions$.stream = hot('-a----', { a: action });
            const response = cold('-#|', {}, error);
            const expected = cold('-----b', { b: completion });
            repositoryService.load = () => response;

            expect(effects.load$).toBeObservable(expected);
        });
    });
});
