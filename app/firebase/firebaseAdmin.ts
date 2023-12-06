import admin from 'firebase-admin';
import { initFirestore } from "@auth/firebase-adapter";

let app

const firebaseAdminConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
}

if (!admin.app.length) {
    app = admin.initializeApp({
        credential: admin.credential.cert(firebaseAdminConfig)
    });
}

const adminFirestore = initFirestore({
    credential: admin.credential.cert(firebaseAdminConfig)
})

const adminAuth = admin.auth(app)

export { adminFirestore, adminAuth }