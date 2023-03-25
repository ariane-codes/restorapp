import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ route, locals }) => {
    console.log("LAYOUT SERVER LOAD");
    return {
        currentUser: locals.currentUser,
        route: route.id
    }
};