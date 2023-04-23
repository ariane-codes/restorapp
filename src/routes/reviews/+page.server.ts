import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';


export const actions: Actions = {
    default: async ({ request, locals}) => {

        if (!locals.currentUser) {
            return fail(401, {
                errorCode: "User must be logged in to submit a review."
            })
        }

        let formData = await request.formData();

        console.log("formData", formData);

        
    }
};