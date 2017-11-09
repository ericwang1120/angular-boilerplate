import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromEvents from './events';
import * as fromRoot from '../../';

export interface EventsState {
    events: fromEvents.State;
}

export interface State extends fromRoot.State {
    'events': EventsState;
}

export const reducers = {
    events: fromEvents.reducer,
};

export const getEventsState = createFeatureSelector<EventsState>('events');

export const getEventEntitiesState = createSelector(
    getEventsState,
    (state) => state.events
);

export const getEvents = createSelector(
    getEventEntitiesState,
    fromEvents.getEvents
);

export const getLoaded = createSelector(
    getEventEntitiesState,
    fromEvents.getLoaded
);

export const getLoading = createSelector(
    getEventEntitiesState,
    fromEvents.getLoading
);
