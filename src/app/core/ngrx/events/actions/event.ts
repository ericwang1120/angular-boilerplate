import { Action } from '@ngrx/store';
import { Event } from '../models/event';
// tslint:disable:max-classes-per-file

export const LOAD = '[Event] Load';
export const LOAD_SUCCESS = '[Event] Load Success';
export const LOAD_FAIL = '[Event] Load Fail';

export class Load implements Action {
    public readonly type = LOAD;

    constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
    public readonly type = LOAD_SUCCESS;

    constructor(public payload: Event[]) { }
}

export class LoadFail implements Action {
    public readonly type = LOAD_FAIL;

    constructor(public payload: any) { }
}

export type Actions = Load
    | LoadSuccess
    | LoadFail;
