import { Observable } from 'rxjs/Observable';
import { Repository } from '../models/repository';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { jwt } from '../../utilities/helpers/jwt';

@Injectable()
export class RepositoryService {
  constructor(private http: Http) { }

  public load(): Observable<Repository[]> {
    return this.http
      .get(`${API_URL}Repository.JSON`, jwt())
      .map((res) => {
        return res.json();
      });
  }
}
