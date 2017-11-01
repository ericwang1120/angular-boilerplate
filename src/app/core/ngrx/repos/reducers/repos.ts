import { createSelector } from '@ngrx/store';
import { Repo, generateMockRepo } from '../models/repo';
import * as repo from '../actions/repo';

export interface State {
    loaded: boolean;
    loading: boolean;
    repos: Repo[];
}

export const initialState: State = {
    loaded: false,
    loading: false,
    repos: [],
};

export function reducer(
    state = initialState,
    action: repo.Actions
): State {
    switch (action.type) {
        case repo.LOAD: {
            return {
                ...state,
                loading: true,
            };
        }

        case repo.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                repos: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getRepos = (state: State) => state.repos;
