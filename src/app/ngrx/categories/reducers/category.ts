import { createSelector } from '@ngrx/store';
import * as category from '../actions/category';
import { Category, generateMockCategory } from '../models/category';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State {
    loading: boolean;
    levelOneCategory: Category;
}

/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = {
    loading: false,
    levelOneCategory: generateMockCategory(),
};

export function reducer(
    state = initialState,
    action: category.Actions
): State {
    switch (action.type) {
        case category.SEARCH_LEVEL_ONE: {
            return {
                ...state,
                loading: true,
            };
        }
        case category.RESET_STATE: {
            return initialState;
        }

        case category.SEARCH_LEVEL_ONE_COMPLETE: {
            return {
                ...state,
                levelOneCategory: action.payload,
                loading: false,
            };
        }

        default: {
            return state;
        }
    }
}

export const getLevelOneCategory = (state: State) => state.levelOneCategory;
export const getLoading = (state: State) => state.loading;
