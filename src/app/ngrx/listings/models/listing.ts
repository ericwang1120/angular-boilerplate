import { SingleListing } from './single-listing';

export interface Listing {
    TotalCount: number;
    Page: number;
    PageSize: number;
    List: SingleListing[];
}

export function generateMockListing(): Listing {
    return {
        TotalCount: 0,
        Page: 0,
        PageSize: 0,
        List: [],
    };
}