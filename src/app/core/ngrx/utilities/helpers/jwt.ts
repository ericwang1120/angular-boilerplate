import { Http, Headers, Response, RequestOptions } from '@angular/http';

export function jwt() {
    let jwtHeaders = new Headers({ 'Content-Type': 'application/json' });
    return new RequestOptions({ headers: jwtHeaders });
}
