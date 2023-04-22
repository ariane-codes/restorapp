import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from "$lib/firebase/firebase.client";
import { getDocs, collection, query, where, Query } from "firebase/firestore";


export const GET: RequestHandler = async ({ params }) => {

    const restaurantId = params.slug;

    const restaurantsRef = collection(db, "restaurants");
    const q: Query = query(
        restaurantsRef,
        where("id", "==", restaurantId)
    )
    const qSnapshot = await getDocs(q);

    if (!qSnapshot.empty) {
        const restaurant = qSnapshot.docs[0].data();
        return json(restaurant);
    }
    
    throw error(404, "Restaurant not found");
};