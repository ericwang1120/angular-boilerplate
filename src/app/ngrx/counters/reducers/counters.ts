import { createSelector } from '@ngrx/store';
import * as counter from '../actions/counter';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State {
    timesOfSwitchMap: number | null;
    timesOfMergeMap: number | null;
    timesOfDebounce: number | null;
}

/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = {
    timesOfSwitchMap: 0,
    timesOfMergeMap: 0,
    timesOfDebounce: 0,
};

export function reducer(
    state = initialState,
    action: counter.Actions
): State {
    switch (action.type) {
        case counter.SEARCH_COMPLETE_OF_SWITCH_MAP: {
            return {
                ...state,
                timesOfSwitchMap: state.timesOfSwitchMap + 1,
            };
        }

        case counter.SEARCH_COMPLETE_OF_MERGE_MAP: {
            return {
                ...state,
                timesOfMergeMap: state.timesOfMergeMap + 1,
            };
        }

        case counter.SEARCH_COMPLETE_OF_DEBOUNCE: {
            return {
                ...state,
                timesOfDebounce: state.timesOfDebounce + 1,
            };
        }

        default: {
            return state;
        }
    }
}

export const getTimesOfSwitchMap = (state: State) => state.timesOfSwitchMap;
export const getTimesOfMergeMap = (state: State) => state.timesOfMergeMap;
export const getTimesOfDebounce = (state: State) => state.timesOfDebounce;
