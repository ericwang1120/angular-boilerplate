import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

// ngrx
import { Store } from '@ngrx/store';
import * as fromRepositories from '../../core/ngrx/repositories/reducers';
import * as repository from '../../core/ngrx/repositories/actions/repository';
import { Repository } from '../../core/ngrx/repositories/models/repository';

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  public repositories$: Observable<Repository[]>;

  constructor(
    private store: Store<fromRepositories.State>
  ) {
    this.repositories$ = store.select(fromRepositories.getRepositories);
  }

  public ngOnInit(): void {
    this.store.dispatch(new repository.Load());
  }
}
