import { Observable } from 'rxjs/Observable';
import { Repo } from '../models/repo';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { jwt } from '../../utilities/helpers/jwt';

@Injectable()
export class RepoService {
  constructor(private http: Http) { }

  public load(): Observable<Repo[]> {
    return this.http
      .get(`${API_URL}Repo.JSON`, jwt())
      .map((res) => {
        return res.json();
      });
  }
}
