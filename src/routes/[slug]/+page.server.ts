import type { Restaurant } from '$lib/models';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {

    const restaurantResponse = await fetch(`/${params.slug}`)

    const restaurant: Restaurant = await restaurantResponse.json();

    return {
        restaurant
    };
    
}) satisfies PageServerLoad;