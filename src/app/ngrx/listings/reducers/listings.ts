import { createSelector } from '@ngrx/store';
import * as listing from '../actions/listing';
import { Listing, generateMockListing } from '../models/listing';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State {
    loading: boolean;
    oneDollarListing: Listing;
    closingListing: Listing;
    latestListing: Listing;
}

/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = {
    loading: false,
    oneDollarListing: generateMockListing(),
    closingListing: generateMockListing(),
    latestListing: generateMockListing(),
};

export function reducer(
    state = initialState,
    action: listing.Actions
): State {
    switch (action.type) {
        case listing.SEARCH_ONE_DOLLAR,
            listing.SEARCH_CLOSING,
            listing.SEARCH_LATEST: {
                return {
                    ...state,
                    loading: true,
                };
            }
        case listing.RESET_STATE: {
            return initialState;
        }

        case listing.SEARCH_ONE_DOLLAR_COMPLETE: {
            return {
                ...state,
                oneDollarListing: action.payload,
                loading: false,
            };
        }

        case listing.SEARCH_CLOSING_COMPLETE: {
            return {
                ...state,
                closingListing: action.payload,
                loading: false,
            };
        }

        case listing.SEARCH_LATEST_COMPLETE: {
            return {
                ...state,
                latestListing: action.payload,
                loading: false,
            };
        }

        default: {
            return state;
        }
    }
}

export const getOneDollarListing = (state: State) => state.oneDollarListing;
export const getClosingListing = (state: State) => state.closingListing;
export const getLatestListing = (state: State) => state.latestListing;
export const getLoading = (state: State) => state.loading;
