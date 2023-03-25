import { decodeToken } from "$lib/firebase/firebase.server";
import { FIREBASE_AUTH_COOKIE } from "$lib/utils/formUtils";
import type { Handle } from "@sveltejs/kit";
import type { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get(FIREBASE_AUTH_COOKIE) || '';
	const decodedToken: DecodedIdToken | null = await decodeToken(token);
	if (decodedToken) {
		const { uid, name, email } = decodedToken;
		event.locals.currentUser = { uid, name, email: String(email)};
	}

	const response = await resolve(event);

	return response;
}

