import { Action } from '@ngrx/store';
// import { Book } from '../models/book';
import { Listing } from '../models/listing';
// tslint:disable:max-classes-per-file

export const SEARCH_ONE_DOLLAR = '[listing] Search One Dollar';
export const SEARCH_ONE_DOLLAR_COMPLETE = '[listing] Search One Dollar Complete';
export const SEARCH_CLOSING = '[listing] Search Closing';
export const SEARCH_CLOSING_COMPLETE = '[listing] Search Closing Complete';
export const SEARCH_LATEST = '[listing] Search Latest';
export const SEARCH_LATEST_COMPLETE = '[listing] Search Latest Complete';
export const RESET_STATE = '[Listing] Reset State';

export class SearchOneDollar implements Action {
    public readonly type = SEARCH_ONE_DOLLAR;
}

export class SearchOneDollarComplete implements Action {
    public readonly type = SEARCH_ONE_DOLLAR_COMPLETE;
    constructor(public payload: Listing) { }
}

export class SearchClosing implements Action {
    public readonly type = SEARCH_CLOSING;
}

export class SearchClosingComplete implements Action {
    public readonly type = SEARCH_CLOSING_COMPLETE;
    constructor(public payload: Listing) { }
}

export class SearchLatest implements Action {
    public readonly type = SEARCH_LATEST;
}

export class SearchLatestComplete implements Action {
    public readonly type = SEARCH_LATEST_COMPLETE;
    constructor(public payload: Listing) { }
}

export class ResetState implements Action {
    public readonly type = RESET_STATE;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = SearchOneDollar
    | SearchOneDollarComplete
    | ResetState
    | SearchClosing
    | SearchClosingComplete
    | SearchLatest
    | SearchLatestComplete;
