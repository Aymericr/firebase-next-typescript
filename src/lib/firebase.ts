import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';

export const firebaseConfig = {
    credential: {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const app = firebase.app();
// const auth = firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const auth = firebase.auth(); // TODO: change user session persistence https://firebase.google.com/docs/auth/web/auth-state-persistence#modifying_the_auth_state_persistence
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();
const functions = firebase.functions();

if (process.env.NODE_ENV !== 'production') {
    functions.useEmulator('localhost', 5001);
    db.useEmulator('localhost', 8080);
    auth.useEmulator('http://localhost:9099/');
}

export { auth, db, functions, now, storage };

console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');
