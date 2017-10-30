import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { jwt } from '../../utilities/helpers/jwt';

@Injectable()
export class BookService {
  constructor(private http: Http) { }

  public load(): Observable<Book[]> {
    return this.http
      .get(`${API_URL}Book.JSON`, jwt())
      .map((res) => {
        return res.json();
      });
  }
}
