import { decodeToken } from "$lib/firebase/firebase.server";
import { FIREBASE_AUTH_COOKIE } from "$lib/utils/formUtils";
import type { Handle } from "@sveltejs/kit";
import type { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { db } from "$lib/firebase/firebase.client";
import { getDocs, collection, query, where, Query } from "firebase/firestore";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get(FIREBASE_AUTH_COOKIE) || '';
	const decodedToken: DecodedIdToken | null = await decodeToken(token);
	if (decodedToken) {
		const { uid, email } = decodedToken;
		
		const usersRef = collection(db, "users");
		const q: Query = query(usersRef, where("uid", "==", uid));
		const snapshot = await getDocs(q);

		if (!snapshot.empty) {
			const { name } = snapshot.docs[0].data();
			event.locals.currentUser = { uid, name, email: String(email)};
		}
	}

	const response = await resolve(event);

	return response;
}

