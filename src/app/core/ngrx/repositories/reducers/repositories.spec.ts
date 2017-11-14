import { reducer } from './repositories';
import * as fromRepositories from './repositories';
import { Load, LoadFail, LoadSuccess } from '../actions/repository';
import { Repository, generateMockRepository } from '../models/repository';

describe('RepositoriesReducer', () => {
    const repository1 = generateMockRepository();
    const repository2 = { ...repository1, id: '222' };
    const repository3 = { ...repository1, id: '333' };
    const initialState: fromRepositories.State = {
        loaded: false,
        loading: false,
        repositories: [],
    };

    describe('undefined action', () => {
        it('should return the default state', () => {
            const result = reducer(undefined, {} as any);

            expect(result).toEqual(initialState);
        });
    });

    describe('LOAD', () => {
        const expectedResult = {
            loaded: false,
            loading: true,
            repositories: [],
        };

        it('should change loading to true', () => {
            const action = new Load('userName');

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('LOAD_SUCCESS', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            repositories: [repository2, repository3],
        };

        it('should load repositories', () => {
            const action = new LoadSuccess([repository2, repository3]);

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('LOAD_FAIL', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            repositories: [],
        };

        it('return empty array of repositories when load fail', () => {
            const action = new LoadFail('Error Message');

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('selectors', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            repositories: [],
        };

        it('should return correct selector', () => {
            const loaded = expectedResult.loaded;
            const loading = expectedResult.loading;
            const repositories = expectedResult.repositories;

            expect(fromRepositories.getLoaded(expectedResult)).toEqual(loaded);
            expect(fromRepositories.getLoading(expectedResult)).toEqual(loading);
            expect(fromRepositories.getRepositories(expectedResult)).toEqual(repositories);
        });
    });
});
