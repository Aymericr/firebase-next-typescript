import * as functions from 'firebase-functions';
const { default: next } = require('next');


const isDev = process.env.NODE_ENV !== 'production';

const server = next({
    dev: isDev,
    conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();

export const nextServer = functions.https.onRequest((req, res) => {
    return server.prepare().then(() => nextjsHandle(req, res));
});

// 🔥🔥🔥 Firebase functions 🔥🔥🔥
export { helloWorld } from './functions/hello';