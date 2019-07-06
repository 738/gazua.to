import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Response } from 'express';
import { TypedRequest } from './main/model/Types';
import { GetShortUrlRequest } from './generate/model/ShortUrlRequest';
import { getRandomPostfix } from './util/GeneralUtil';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

export const getShortUrl = functions.https.onRequest(async (request: TypedRequest<GetShortUrlRequest>, response: Response) => {
    const { url, postfix } = request.body;

    const short_url = postfix || getRandomPostfix(6);
    let docRef = db.collection('gazua-to').doc(short_url);
    let setShortUrlResult: FirebaseFirestore.WriteResult = await docRef.set({
        short_url,
        url,
    });
    console.log(JSON.stringify(setShortUrlResult));

    response.send(`Hello World! url: ${url} postfix: ${postfix} good!!!`);
});
