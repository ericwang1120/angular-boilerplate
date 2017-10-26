import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCategory from './category';
import * as fromRoot from '../../';

export interface CategoryState {
    categories: fromCategory.State;
}

export interface State extends fromRoot.State {
    categories: CategoryState;
}

export const reducers = {
    categories: fromCategory.reducer,
};

export const getCategoryState = createFeatureSelector<CategoryState>('categories');

export const getCategoryEntitiesState = createSelector(
    getCategoryState,
    (state) => state.categories
);

export const getLevelOneCategory = createSelector(
    getCategoryEntitiesState,
    fromCategory.getLevelOneCategory
);

export const getLoading = createSelector(
    getCategoryEntitiesState,
    fromCategory.getLoading
);
