import admin, { auth, credential, initializeApp } from 'firebase-admin';
import { initFirestore } from "@auth/firebase-adapter";

let app

const firebaseAdminConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
}

if (!admin.app.length) {
    app = initializeApp({
        credential: credential.cert(firebaseAdminConfig)
    });
}

const adminFirestore = initFirestore({
    credential: credential.cert(firebaseAdminConfig)
})

const adminAuth = auth(app)

export { adminFirestore, adminAuth }