import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CounterService {
  public count(id): Observable<number> {
    return of(id).delay(2000);
  }
}
