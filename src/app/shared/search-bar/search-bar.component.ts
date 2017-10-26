
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import * as fromCategories from '../../ngrx/categories/reducers';
import * as category from '../../ngrx/categories/actions/category';
import { Category } from '../../ngrx/categories/models/category';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'search-bar',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./search-bar.component.scss'],
    templateUrl: './search-bar.component.html'
})

export class SearchBarComponent implements OnInit {
    public oneLevelCategory$: Observable<Category>;
    public selectedCategory = 'all categories';

    constructor(private store: Store<fromCategories.State>) {
        this.oneLevelCategory$ = store.select(fromCategories.getLevelOneCategory);
    }

    public ngOnInit(): void {
        this.store.dispatch(new category.SearchLevelOne());
    }

    public select(selectedCategory) {
        this.selectedCategory = selectedCategory;
    }

    get widthOfInputGroup() {
        return 55 + this.selectedCategory.length * 7;
    }
}
