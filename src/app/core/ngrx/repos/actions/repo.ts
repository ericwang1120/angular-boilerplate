import { Action } from '@ngrx/store';
import { Repo } from '../models/repo';
// tslint:disable:max-classes-per-file

export const LOAD = '[Repo] Load';
export const LOAD_SUCCESS = '[Repo] Load Success';
export const LOAD_FAIL = '[Repo] Load Fail';
export const RESET_STATE = '[Repo] Reset State';

export class Load implements Action {
    public readonly type = LOAD;
}

export class LoadSuccess implements Action {
    public readonly type = LOAD_SUCCESS;

    constructor(public payload: Repo[]) { }
}

export class LoadFail implements Action {
    public readonly type = LOAD_FAIL;

    constructor(public payload: any) {}
}

export type Actions = Load
    | LoadSuccess
    | LoadFail;
