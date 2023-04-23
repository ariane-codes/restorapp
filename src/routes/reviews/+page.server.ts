import { db } from '$lib/firebase/firebase.client';
import { redirect, fail } from '@sveltejs/kit';
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
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

            const restaurantRef = doc(db, "restaurants", restaurantId);
            const restaurantDoc = await getDoc(restaurantRef);
            const restaurant = restaurantDoc.data()
            const currentReviewCount = restaurant?.reviewCount;
            const currentRestaurantRating = restaurant?.rating;

            const { newRestaurantRating, newReviewCount } = calculateNewRestaurantRating(currentRestaurantRating, currentReviewCount, reviewRating);

            await updateDoc(restaurantRef, {
                reviewCount: newReviewCount,
                rating: newRestaurantRating,
            })

            return { success: true }
        } catch (error) {
            console.log(error);
        }

    }
};

const calculateNewRestaurantRating = (currentRating: number, currentReviewCount: number, newRating: number) => {
    const newReviewCount = currentReviewCount + 1;
    const newRestaurantRating = (currentRating * currentReviewCount + newRating) / newReviewCount;
    return { newRestaurantRating, newReviewCount };
}