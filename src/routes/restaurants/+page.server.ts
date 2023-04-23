import { db, storage } from '$lib/firebase/firebase.client';
import type { Restaurant } from '$lib/models';
import { redirect, type Actions } from '@sveltejs/kit';
import { ref, uploadBytes } from 'firebase/storage';
import type { PageServerLoad } from './$types';

export const actions: Actions = {
    default: async ({ request, url }) => {

        const formData = await request.formData();
        const restaurantName = formData.get("restaurantName") as string;
        const locationDescription = formData.get("locationDescription") as string;
        const lat = parseFloat(formData.get("lat") as string);
        const lng = parseFloat(formData.get("lng") as string);
        const categories = (formData.get("categories") as string).split(",");
        const tags = (formData.get("tags") as string).split(",");
        const price = parseInt(formData.get("price") as string);
        const picture = formData.get("picture") as Blob;
        console.log(picture)

        const newRestaurantId = crypto.randomUUID();

        // Upload image first;
        
        const storageRef = ref(storage, `restaurants/${newRestaurantId}.${picture.type.split("/")[1]}`);
        
        const snapshot = await uploadBytes(storageRef, picture);
        console.log(snapshot.metadata);

    }
}

export const load = (async ({ url, fetch }) => {
    const searchParams: URLSearchParams = url.searchParams;
    const layout: string | null = searchParams.get("layout");


    if (!layout) { // Default layout is list.
        const newSearchParams: URLSearchParams = searchParams;
        newSearchParams.set("layout", "list");
        throw redirect(302, `?${newSearchParams.toString()}`);
    }

    const restaurantResponse = await fetch(`/restaurants?${searchParams.toString()}`)
    const restaurants: Restaurant[] = await restaurantResponse.json();

    return {
        layout,
        restaurants
    };
}) satisfies PageServerLoad;