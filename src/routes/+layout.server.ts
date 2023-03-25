import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ route, locals }) => {
    return {
        currentUser: locals.currentUser,
        route: route.id
    }
};