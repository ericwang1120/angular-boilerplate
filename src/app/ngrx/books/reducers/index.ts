import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBooks from './books';
import * as fromRoot from '../../';

export interface BooksState {
    books: fromBooks.State;
}

export interface State extends fromRoot.State {
    'books': BooksState;
}

export const reducers = {
    books: fromBooks.reducer,
};

export const getBooksState = createFeatureSelector<BooksState>('books');

export const getBookEntitiesState = createSelector(
    getBooksState,
    (state) => state.books
);

export const getBooks = createSelector(
    getBookEntitiesState,
    fromBooks.getBooks
);

export const getLoaded = createSelector(
    getBookEntitiesState,
    fromBooks.getLoaded
);

export const getLoading = createSelector(
    getBookEntitiesState,
    fromBooks.getLoading
);
