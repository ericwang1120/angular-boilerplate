import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRepos from './repos';
import * as fromRoot from '../../';

export interface ReposState {
    repos: fromRepos.State;
}

export interface State extends fromRoot.State {
    'repos': ReposState;
}

export const reducers = {
    repos: fromRepos.reducer,
};

export const getReposState = createFeatureSelector<ReposState>('repos');

export const getRepoEntitiesState = createSelector(
    getReposState,
    (state) => state.repos
);

export const getRepos = createSelector(
    getRepoEntitiesState,
    fromRepos.getRepos
);

export const getLoaded = createSelector(
    getRepoEntitiesState,
    fromRepos.getLoaded
);

export const getLoading = createSelector(
    getRepoEntitiesState,
    fromRepos.getLoading
);
