import admin from "firebase-admin"
import fromBase64 from './convertCode'

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: process.env.DB_CLIENT_EMAIL,
            privateKey: fromBase64(process.env.DB_PRIVATE_KEY),
            projectId: process.env.DB_PROJECT_ID
        })
    });
}


const db = admin.firestore()

export default db