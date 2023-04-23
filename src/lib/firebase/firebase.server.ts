import admin from 'firebase-admin';
import { VITE_FIREBASE_ADMIN_SECRET } from '$env/static/private';
import type { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

const initializeFirebase = () => {
	if (!admin.apps.length) {
		const serviceAccount = JSON.parse(VITE_FIREBASE_ADMIN_SECRET);
		admin.initializeApp({
			credential: admin.credential.cert({
                projectId: serviceAccount.project_id,
                clientEmail: serviceAccount.client_email,
                privateKey: serviceAccount.private_key.replace(/\\n/g, '\n')
            }),
			databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
		});
	}
}

export const decodeToken = async (token: string): Promise<DecodedIdToken | null> => {
    if (!token || token === 'null' || token === 'undefined') return null;
	try {
		initializeFirebase();
		return await admin.auth().verifyIdToken(token);
	} catch (err) {
        console.error('An error occurred validating token', (err as Error).message);
		return null;
	}
}
