import { Observable } from 'rxjs/Observable';
import { Event } from '../models/event';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { jwt } from '../../utilities/helpers/jwt';

@Injectable()
export class EventService {
  constructor(private http: Http) { }

  public load(userName: string): Observable<Event[]> {
    let result = this.http
      .get(`${API_URL}users/${userName}/events`, jwt())
      .map((res) => res.json());
    return result;
  }
}
