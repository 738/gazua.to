import * as functions from 'firebase-functions';

export interface TypedRequest<T> extends functions.Request {
    body: T;
}
