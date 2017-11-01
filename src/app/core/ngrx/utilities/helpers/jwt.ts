import { Http, Headers, Response, RequestOptions } from '@angular/http';

export function jwt() {
    let jwtHeaders = new Headers({ 'Content-Type': 'application/json' });

    // jwtHeaders.append('Authorization',
    //     `OAuth oauth_consumer_key=${OAUTH_CONSUMER_KEY},
    //      oauth_token=${OAUTH_TOKEN}, 
    //      oauth_version=1.0, oauth_timestamp=1285533129, 
    //      oauth_signature_method=PLAINTEXT, 
    //      oauth_signature=${OAUTH_SIGNATURE}`.replace(/\n/gm, ''));

    return new RequestOptions({ headers: jwtHeaders });
}
