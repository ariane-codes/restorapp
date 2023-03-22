import type { LayoutServerLoad } from "./$types";
import { auth } from "$lib/firebase/firebase.client";

export const load: LayoutServerLoad = async (event) => {
    return {
        currentUser: auth.currentUser
    }
};