import { db } from '$lib/firebase/firebase.client';
import { redirect, fail } from '@sveltejs/kit';
import { doc, setDoc } from "firebase/firestore";
import type { Actions } from './$types';


export const actions: Actions = {
    default: async ({ request, locals}) => {

        if (!locals.currentUser) {
            return fail(401, {
                errorCode: "User must be logged in to submit a review."
            })
        }

        let formData = await request.formData();

        const restaurantId = formData.get("restaurantId") as string;
        const reviewTitle = formData.get("title") as string;
        const reviewBody = formData.get("body") as string;
        const reviewRating = parseInt(formData.get("rating") as string);

        try {
            const reviewId = crypto.randomUUID();
            await setDoc(doc(db, "reviews", reviewId), {
                id: reviewId,
                restaurantId,
                title: reviewTitle,
                body: reviewBody,
                rating: reviewRating,
                createdOn: new Date(),
                user: {
                    id: locals.currentUser.uid,
                    name: locals.currentUser.name,
                }
            })

            return { success: true }
        } catch (error) {
            console.log(error);
        }

        
    }
};