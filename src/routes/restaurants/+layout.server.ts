import type { Restaurant } from '$lib/models';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';



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
}) satisfies LayoutServerLoad;