import { Action } from '@ngrx/store';
import { Book } from '../models/book';
// tslint:disable:max-classes-per-file

export const LOAD = '[Book] Load';
export const LOAD_SUCCESS = '[Book] Load Success';
export const LOAD_FAIL = '[Book] Load Fail';
export const RESET_STATE = '[Book] Reset State';

export class Load implements Action {
    public readonly type = LOAD;
}

export class LoadSuccess implements Action {
    public readonly type = LOAD_SUCCESS;

    constructor(public payload: Book[]) { }
}

export class LoadFail implements Action {
    public readonly type = LOAD_FAIL;

    constructor(public payload: any) {}
}

export type Actions = Load
    | LoadSuccess
    | LoadFail;
