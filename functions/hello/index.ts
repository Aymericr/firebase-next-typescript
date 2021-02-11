import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    const envVar = process.env.NEXT_PUBLIC_HELLOWORLD
    functions.logger.info("Hello env!", envVar);
    response.send(`Hello from Firebase! process.env.NEXT_PUBLIC_HELLOWORLD=${envVar}`);
});