import type { Restaurant } from '$lib/models';
import type { Review } from '$lib/models/review';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {

    const restaurantResponse = await fetch(`/restaurants/${params.slug}`)
    const restaurant: Restaurant = await restaurantResponse.json();
    let reviews: Review[] = [];

    if (restaurant.reviewCount && restaurant.reviewCount > 0) {
        const reviewsResponse = await fetch(`/reviews?restaurantId=${params.slug}`);
        reviews = await reviewsResponse.json();
    }

    console.log("Reviews", reviews)

    return {
        restaurant,
        reviews
    };
    
}) satisfies PageServerLoad;