import { Action } from '@ngrx/store';
// import { Book } from '../models/book';
// tslint:disable:max-classes-per-file

export const SEARCH = '[Counter] Search';
export const SEARCH_COMPLETE_OF_SWITCH_MAP = '[Counter] Search Complete of Switch Map';
export const SEARCH_COMPLETE_OF_MERGE_MAP = '[Counter] Search Complete of Merge Map';
export const SEARCH_COMPLETE_OF_DEBOUNCE = '[Counter] Search Complete of Debounce';

export const LOAD = '[Counter] Load';
export const SELECT = '[Counter] Select';

export class Search implements Action {
    public readonly type = SEARCH;

    constructor(public payload: string) { }
}

export class SearchCompleteOfSwitchMap implements Action {
    public readonly type = SEARCH_COMPLETE_OF_SWITCH_MAP;

    constructor(public payload: string) { }
}

export class SearchCompleteOfMergeMap implements Action {
    public readonly type = SEARCH_COMPLETE_OF_MERGE_MAP;
    constructor(public payload: string) { }
}

export class SearchCompleteOfDebounce implements Action {
    public readonly type = SEARCH_COMPLETE_OF_DEBOUNCE;
    constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = Search | SearchCompleteOfSwitchMap
    | SearchCompleteOfMergeMap | SearchCompleteOfDebounce;
