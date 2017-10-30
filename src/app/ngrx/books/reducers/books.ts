import { createSelector } from '@ngrx/store';
import { Book, generateMockBook } from '../models/book';
import * as book from '../actions/book';

export interface State {
    loaded: boolean;
    loading: boolean;
    books: Book[];
}

export const initialState: State = {
    loaded: false,
    loading: false,
    books: [],
};

export function reducer(
    state = initialState,
    action: book.Actions
): State {
    switch (action.type) {
        case book.LOAD: {
            return {
                ...state,
                loading: true,
            };
        }

        case book.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                books: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getBooks = (state: State) => state.books;
