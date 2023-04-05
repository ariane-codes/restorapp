import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    // console.log("URL", url);

    const searchParams: URLSearchParams = url.searchParams;
    // console.log("searchParams", searchParams);

    const layout: string | null = searchParams.get("layout");
    // console.log("layout", layout); 


    if (!layout) { // Default layout is list.
        const newSearchParams: URLSearchParams = searchParams;
        newSearchParams.set("layout", "list");
        throw redirect(302, `?${newSearchParams.toString()}`);
    }

    return {
        layout: layout
    };
}) satisfies PageServerLoad;