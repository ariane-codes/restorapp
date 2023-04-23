import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
    if (!locals.currentUser) {
        throw redirect(302, "/login?returnTo=/restaurants/new");
    }
    return {};
}) satisfies PageServerLoad;