import { FIREBASE_AUTH_COOKIE } from '$lib/utils/formUtils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies }) => {
    cookies.delete(FIREBASE_AUTH_COOKIE, { path: '/' });
    return json({})
};