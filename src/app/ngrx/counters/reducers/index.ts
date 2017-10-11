import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCounters from './counters';
import * as fromRoot from '../../';

export interface CountersState {
    counters: fromCounters.State;
}

export interface State extends fromRoot.State {
    counters: CountersState;
}

export const reducers = {
    counters: fromCounters.reducer,
};

export const getCountersState = createFeatureSelector<CountersState>('counters');

export const getCounterEntitiesState = createSelector(
    getCountersState,
    (state) => state.counters
);

export const getTimesOfSwitchMap = createSelector(
    getCounterEntitiesState,
    fromCounters.getTimesOfSwitchMap
);

export const getTimesOfMergeMap = createSelector(
    getCounterEntitiesState,
    fromCounters.getTimesOfMergeMap
);

export const getTimesOfDebounce = createSelector(
    getCounterEntitiesState,
    fromCounters.getTimesOfDebounce
);
