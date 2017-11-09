import { createSelector } from '@ngrx/store';
import { Event, generateMockEvent } from '../models/event';
import * as event from '../actions/event';

export interface State {
    loaded: boolean;
    loading: boolean;
    events: Event[];
}

export const initialState: State = {
    loaded: false,
    loading: false,
    events: [],
};

export function reducer(
    state = initialState,
    action: event.Actions
): State {
    switch (action.type) {
        case event.LOAD: {
            return {
                ...state,
                loading: true,
            };
        }

        case event.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                events: action.payload,
            };
        }

        case event.LOAD_FAIL: {
            return {
                loaded: true,
                loading: false,
                events: [],
            };
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getEvents = (state: State) => state.events;
