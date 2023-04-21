import { json, type RequestHandler } from '@sveltejs/kit'
import { paramsToObject } from "$lib/utils/apiUtils";
import { db } from "$lib/firebase/firebase.client";
import { getDocs, collection, query, where, Query } from "firebase/firestore";

export const GET: RequestHandler = async ({ url }) => {
    
    const searchParams: URLSearchParams = url.searchParams;
    const paramsObj = paramsToObject(searchParams);

    const restaurantsRef = collection(db, "restaurants");
    let q: Query;

    // Filter by categories in the database
    // Firebase only allows one array-contains-any operation per query
    if ("categories" in paramsObj) {
        q = query(restaurantsRef, where("categories", "array-contains-any", paramsObj["categories"]));
    } else {
        q = query(restaurantsRef);
    }

    const qSnapshot = await getDocs(q);
    let restaurants = qSnapshot.docs.map(doc => doc.data());

    // Rest of filters are done in the server once data is retrieved

    // Filter by tags, they're an array
    if ("tags" in paramsObj) {
        restaurants = restaurants.filter(restaurant => restaurant.tags.some((t: any) => paramsObj.tags.includes(t)));
    }

    // These other filters are a number
    const restOfFilters: string[] = ["price", "rating"];

    restOfFilters.forEach((key: string) => {
        if (key in paramsObj) {
            restaurants = restaurants.filter( (restaurant) => (
                paramsObj[key].map((numberAsString: string) => parseInt(numberAsString)).includes(Math.floor(restaurant[key]))
            ));
        }
    })

    return json(restaurants);
};