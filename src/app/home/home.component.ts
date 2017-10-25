import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

// ngrx
import { Store } from '@ngrx/store';
import * as fromListings from '../ngrx/listings/reducers';
import * as listing from '../ngrx/listings/actions/listing';
import { Listing } from '../ngrx/listings/models/listing';

@Component({
  selector: 'home',  // <home></home>
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public oneDollarListing$: Observable<Listing>;
  public closingListing$: Observable<Listing>;
  public latestListing$: Observable<Listing>;

  constructor(
    private store: Store<fromListings.State>
  ) {
    this.oneDollarListing$ = store.select(fromListings.getOneDollarListing);
    this.closingListing$ = store.select(fromListings.getClosingListing);
    this.latestListing$ = store.select(fromListings.getLatestListing);
  }

  public ngOnInit(): void {
    this.store.dispatch(new listing.SearchOneDollar());
    this.store.dispatch(new listing.SearchClosing());
    this.store.dispatch(new listing.SearchLatest());
  }

}
