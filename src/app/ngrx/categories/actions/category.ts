import { Action } from '@ngrx/store';
// import { Book } from '../models/book';
import { Category } from '../models/category';
// tslint:disable:max-classes-per-file

export const SEARCH_LEVEL_ONE = '[Category] Search Level One';
export const SEARCH_LEVEL_ONE_COMPLETE = '[Category] Search Level One Complete';
export const RESET_STATE = '[Category] Reset State';

export class SearchLevelOne implements Action {
    public readonly type = SEARCH_LEVEL_ONE;
}

export class SearchLevelOneComplete implements Action {
    public readonly type = SEARCH_LEVEL_ONE_COMPLETE;
    constructor(public payload: Category) { }
}

export class ResetState implements Action {
    public readonly type = RESET_STATE;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = SearchLevelOne
    | SearchLevelOneComplete
    | ResetState;
