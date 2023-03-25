import { auth } from "$lib/firebase/firebase.client";
import { decodeToken } from "$lib/firebase/firebase.server";
import { FIREBASE_AUTH_COOKIE } from "$lib/utils/formUtils";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    console.log("HOOKS SERVER HANDLE");
    const token = event.cookies.get(FIREBASE_AUTH_COOKIE) || '';
	const decodedToken = await decodeToken(token);
	if (decodedToken) {
		const { uid, name, email } = decodedToken;
		event.locals.currentUser = { uid, name, email };
	}

	const response = await resolve(event);

	return response;
}

