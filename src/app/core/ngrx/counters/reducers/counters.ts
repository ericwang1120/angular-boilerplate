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
    loading: boolean;
    acceptedNumberOfActions: number | null;
    timesOfSwitchMap: number | null;
    timesOfMergeMap: number | null;
    timesOfDebounce: number | null;
    statusOfSwitchMap: Array<{ id: number, status: string }>;
    statusOfMergeMap: Array<{ id: number, status: string }>;
}

/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = {
    loading: false,
    acceptedNumberOfActions: 0,
    timesOfSwitchMap: 0,
    timesOfMergeMap: 0,
    timesOfDebounce: 0,
    statusOfSwitchMap: [],
    statusOfMergeMap: [],
};

export function reducer(
    state = initialState,
    action: counter.Actions
): State {
    switch (action.type) {
        case counter.SEARCH: {
            let actionToPush = { id: action.payload, status: 'Processing' };
            let previousStatus = Object.assign([], state.statusOfSwitchMap);
            previousStatus.filter((element) => element.id < action.payload)
                .map((element) => {
                    return element.status === 'Processing' ?
                        element.status = 'Cancelled' :
                        element.status;
                });
            return {
                ...state,
                acceptedNumberOfActions: state.acceptedNumberOfActions + 1,
                statusOfSwitchMap: [...previousStatus, Object.assign({}, actionToPush)],
                statusOfMergeMap: [...state.statusOfMergeMap, Object.assign({}, actionToPush)],
                loading: true
            };
        }

        case counter.RESET_STATE: {
            return initialState;
        }

        case counter.SEARCH_COMPLETE_OF_SWITCH_MAP: {
            let statusResult = Object.assign([], state.statusOfSwitchMap);
            statusResult.filter((element) => element.id === action.payload)
                .map((element) => element.status = 'Success');
            return {
                ...state,
                timesOfSwitchMap: state.timesOfSwitchMap + 1,
                statusOfSwitchMap: statusResult,
            };
        }

        case counter.SEARCH_COMPLETE_OF_MERGE_MAP: {
            let statusOfMergeMapResult = Object.assign([], state.statusOfMergeMap);
            statusOfMergeMapResult.filter((element) => element.id === action.payload)
                .map((element) => element.status = 'Success');
            return {
                ...state,
                timesOfMergeMap: state.timesOfMergeMap + 1,
                statusOfMergeMap: statusOfMergeMapResult,
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
export const getAcceptedNumberOfActions = (state: State) => state.acceptedNumberOfActions;
export const getTimesOfSwitchMap = (state: State) => state.timesOfSwitchMap;
export const getTimesOfMergeMap = (state: State) => state.timesOfMergeMap;
export const getTimesOfDebounce = (state: State) => state.timesOfDebounce;
export const getStatusOfSwitchMap = (state: State) => state.statusOfSwitchMap;
export const getStatusOfMergeMap = (state: State) => state.statusOfMergeMap;
