import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromListing from './listings';
import * as fromRoot from '../../';

export interface ListingState {
    listings: fromListing.State;
}

export interface State extends fromRoot.State {
    listings: ListingState;
}

export const reducers = {
    listings: fromListing.reducer,
};

export const getListingState = createFeatureSelector<ListingState>('listings');

export const getListingEntitiesState = createSelector(
    getListingState,
    (state) => state.listings
);

export const getOneDollarListing = createSelector(
    getListingEntitiesState,
    fromListing.getOneDollarListing
);

export const getClosingListing = createSelector(
    getListingEntitiesState,
    fromListing.getClosingListing
);

export const getLatestListing = createSelector(
    getListingEntitiesState,
    fromListing.getLatestListing
);

export const getLoading = createSelector(
    getListingEntitiesState,
    fromListing.getLoading
);
