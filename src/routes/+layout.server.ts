import type { LayoutServerLoad } from "./$types";
import { auth } from "$lib/firebase/firebase.client";

export const load: LayoutServerLoad = async ({ route, url, params}) => {
    return {
        currentUser: auth.currentUser,
        route: route.id
    }
};