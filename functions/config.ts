import * as admin from 'firebase-admin';
// import * as functions from 'firebase-functions';

admin.initializeApp();

// Export Storage and Firestore database and add custom settings
const storage = admin.storage();
const db = admin.firestore();
db.settings({timestampsInSnapshots: true});

export {storage, db}