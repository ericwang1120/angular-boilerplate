import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { jwt } from '../../utilities/helpers/jwt';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  public load(name: string): Observable<User> {
    return this.http
      .get(`${API_URL}users/${name}`, jwt())
      .map((res) => {
        return res.json();
      });
  }
}
