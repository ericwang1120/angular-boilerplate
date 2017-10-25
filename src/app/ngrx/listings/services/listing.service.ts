import { Observable } from 'rxjs/Observable';
import { Listing } from '../models/listing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { jwt } from '../../utilities/helpers/jwt';

@Injectable()
export class ListingService {
  constructor(private http: Http) { }

  public search(type: string): Observable<Listing> {
    return this.http
      .get(`${API_URL}Listings/${type}.JSON`, jwt())
      .map((res) => {
        return res.json();
      });
  }
}
