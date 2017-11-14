import { Action } from '@ngrx/store';
import { User } from '../models/user';
// tslint:disable:max-classes-per-file

export const LOAD = '[User] Load';
export const LOAD_SUCCESS = '[User] Load Success';
export const LOAD_FAIL = '[User] Load Fail';

export class Load implements Action {
    public readonly type = LOAD;

    constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
    public readonly type = LOAD_SUCCESS;

    constructor(public payload: User) { }
}

export class LoadFail implements Action {
    public readonly type = LOAD_FAIL;

    constructor(public payload: any) { }
}

export type Actions = Load
    | LoadSuccess
    | LoadFail;
