import * as functions from 'firebase-functions';
import { Response } from 'express';
import { TypedRequest } from './main/model/Types';
import { GetShortUrlRequest } from './generate/model/ShortUrlRequest';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const getShortUrl = functions.https.onRequest((request: TypedRequest<GetShortUrlRequest>, response: Response) => {
    const { url, postfix } = request.body;
    response.send(`Hello World! url: ${url} postfix: ${postfix} good!!!`);
});
