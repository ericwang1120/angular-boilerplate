import { Http, Headers, Response, RequestOptions } from '@angular/http';
import _ from 'lodash';

export function allKeyToCamelCase(obj) {
    let output = {};
    for (let i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
            output[_.camelCase(i)] = allKeyToCamelCase(obj[i]);
        } else {
            output[_.camelCase(i)] = obj[i];
        }
    }
    return output;
}
