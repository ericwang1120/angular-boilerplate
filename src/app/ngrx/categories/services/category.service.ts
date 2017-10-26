import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { jwt } from '../../utilities/helpers/jwt';

@Injectable()
export class CategoryService {
  constructor(private http: Http) { }

  public search(depth: number): Observable<Category> {
    return this.http
      .get(`${API_URL}Categories.JSON?depth=${depth}`, jwt())
      .map((res) => {
        return res.json();
      });
  }
}
