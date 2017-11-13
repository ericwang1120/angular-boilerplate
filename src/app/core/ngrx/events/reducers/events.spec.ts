import { reducer } from './events';
import * as fromEvents from './events';
import { Load, LoadFail, LoadSuccess } from '../actions/event';
import { Event, generateMockEvent } from '../models/event';

describe('EventsReducer', () => {
    const event1 = generateMockEvent();
    const event2 = { ...event1, id: '222' };
    const event3 = { ...event1, id: '333' };
    const initialState: fromEvents.State = {
        loaded: false,
        loading: false,
        events: [],
    };

    describe('undefined action', () => {
        it('should return the default state', () => {
            const result = reducer(undefined, {} as any);

            expect(result).toEqual(initialState);
        });
    });

    describe('LOAD', () => {
        const expectedResult = {
            loaded: false,
            loading: true,
            events: [],
        };

        it('should change loading to true', () => {
            const action = new Load('userName');

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('LOAD_SUCCESS', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            events: [event2, event3],
        };

        it('should load events', () => {
            const action = new LoadSuccess([event2, event3]);

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('LOAD_FAIL', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            events: [],
        };

        it('return empty array of events when load fail', () => {
            const action = new LoadFail('Error Message');

            const result = reducer(initialState, action);

            expect(result).toEqual(expectedResult);
        });
    });

    describe('selectors', () => {
        const expectedResult = {
            loaded: true,
            loading: false,
            events: [],
        };

        it('should return correct selector', () => {
            const loaded = expectedResult.loaded;
            const loading = expectedResult.loading;
            const events = expectedResult.events;

            expect(fromEvents.getLoaded(expectedResult)).toEqual(loaded);
            expect(fromEvents.getLoading(expectedResult)).toEqual(loading);
            expect(fromEvents.getEvents(expectedResult)).toEqual(events);
        });
    });
});
