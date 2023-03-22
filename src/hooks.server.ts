import { auth } from "$lib/firebase/firebase.client";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    // Stage 1

    event.locals.currentUser = auth.currentUser;

    const response = await resolve(event);

    // Stage 3

    return response;

}