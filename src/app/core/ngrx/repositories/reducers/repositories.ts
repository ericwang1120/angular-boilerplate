import { createSelector } from '@ngrx/store';
import { Repository, generateMockRepository } from '../models/repository';
import * as repository from '../actions/repository';

export interface State {
    loaded: boolean;
    loading: boolean;
    repositories: Repository[];
}

export const initialState: State = {
    loaded: false,
    loading: false,
    repositories: [],
};

export function reducer(
    state = initialState,
    action: repository.Actions
): State {
    switch (action.type) {
        case repository.LOAD: {
            return {
                ...state,
                loading: true,
            };
        }

        case repository.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                repositories: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getRepositories = (state: State) => state.repositories;
