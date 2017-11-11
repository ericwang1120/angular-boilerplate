import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users';
import * as fromRoot from '../../';

export interface UsersState {
    users: fromUsers.State;
}

export interface State extends fromRoot.State {
    'users': UsersState;
}

export const reducers = {
    users: fromUsers.reducer,
};

export const getUsersState = createFeatureSelector<UsersState>('users');

export const getUserEntitiesState = createSelector(
    getUsersState,
    (state) => state.users
);

export const getCurrentUser = createSelector(
    getUserEntitiesState,
    fromUsers.getCurrentUser
);

export const getLoaded = createSelector(
    getUserEntitiesState,
    fromUsers.getLoaded
);

export const getLoading = createSelector(
    getUserEntitiesState,
    fromUsers.getLoading
);
