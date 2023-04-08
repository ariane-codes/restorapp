import { json, type RequestHandler } from '@sveltejs/kit'
import { paramsToObject } from "$lib/utils/apiUtils";
import { db } from "$lib/firebase/firebase.client";
import { getDocs, collection, query, where, QueryConstraint } from "firebase/firestore";

export const GET: RequestHandler = async ({ url }) => {
    
    const searchParams: URLSearchParams = url.searchParams;
    const paramsObj = paramsToObject(searchParams);

    const queryFilters: QueryConstraint[] = [];

    ["categories", "tags", "price", "rating"].forEach(key => {
        if (key in paramsObj) {
            queryFilters.push(where(key, "array-contains-any", paramsObj[key]))
        }
    })

    const restaurantsRef = collection(db, "restaurants");
    const q = query(restaurantsRef, ...queryFilters);
    const qSnapshot = await getDocs(q);
    const restaurants = qSnapshot.docs.map(doc => doc.data());

    return json(restaurants)

};