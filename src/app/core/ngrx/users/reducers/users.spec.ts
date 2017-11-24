import { reducer } from './users';
import * as fromUsers from './users';
import { Load, LoadFail, LoadSuccess } from '../actions/user';
import { User, generateMockUser } from '../models/user';

describe('UsersReducer', () => {
    const user1 = generateMockUser();
    const initialState: fromUsers.State = {
        loaded: false,
        loading: false,
        currentUser: generateMockUser(),
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
            currentUser: generateMockUser(),
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
            currentUser: user1,
        };

        it('should load current user', () => {
            const action = new LoadSuccess(user1);

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('LOAD_FAIL', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            currentUser: null,
        };

        it('return empty user when load fail', () => {
            const action = new LoadFail('Error Message');

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('selectors', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            currentUser: generateMockUser(),
        };

        it('should return correct selector', () => {
            const loaded = expectedResult.loaded;
            const loading = expectedResult.loading;
            const currentUser = expectedResult.currentUser;

            expect(fromUsers.getLoaded(expectedResult)).toEqual(loaded);
            expect(fromUsers.getLoading(expectedResult)).toEqual(loading);
            expect(fromUsers.getCurrentUser(expectedResult)).toEqual(currentUser);
        });
    });
});
