import { createSelector } from '@ngrx/store';
import { User, generateMockUser } from '../models/user';
import * as user from '../actions/user';

export interface State {
    loaded: boolean;
    loading: boolean;
    currentUser: User;
}

export const initialState: State = {
    loaded: false,
    loading: false,
    currentUser: generateMockUser(),
};

export function reducer(
    state = initialState,
    action: user.Actions
): State {
    switch (action.type) {
        case user.LOAD: {
            return {
                ...state,
                loading: true,
            };
        }

        case user.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                currentUser: action.payload,
            };
        }

        case user.LOAD_FAIL: {
            return {
                loaded: true,
                loading: false,
                currentUser: null,
            };
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getCurrentUser = (state: State) => state.currentUser;
