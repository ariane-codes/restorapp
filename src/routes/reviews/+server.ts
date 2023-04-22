import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from "$lib/firebase/firebase.client";
import { getDocs, collection, query, where, Query } from "firebase/firestore";

export const GET: RequestHandler = async ({ url }) => {
    
    const searchParams: URLSearchParams = url.searchParams;

    const reviewsRef = collection(db, "reviews");
    let q: Query;

    if (searchParams.has("restaurantId")) {
        q = query(reviewsRef, where("restaurantId", "==", searchParams.get("restaurantId")));
    } else {
        q = query(reviewsRef);
    }

    const qSnapshot = await getDocs(q);
    const reviews = qSnapshot.docs.map(doc => doc.data());

    return json(reviews);
};