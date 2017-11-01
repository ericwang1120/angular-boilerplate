import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRepositories from './repositories';
import * as fromRoot from '../../';

export interface RepositoriesState {
    repositories: fromRepositories.State;
}

export interface State extends fromRoot.State {
    'repositories': RepositoriesState;
}

export const reducers = {
    repositories: fromRepositories.reducer,
};

export const getRepositoriesState = createFeatureSelector<RepositoriesState>('repositories');

export const getRepositoryEntitiesState = createSelector(
    getRepositoriesState,
    (state) => state.repositories
);

export const getRepositories = createSelector(
    getRepositoryEntitiesState,
    fromRepositories.getRepositories
);

export const getLoaded = createSelector(
    getRepositoryEntitiesState,
    fromRepositories.getLoaded
);

export const getLoading = createSelector(
    getRepositoryEntitiesState,
    fromRepositories.getLoading
);
