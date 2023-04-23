import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request }) => {
        let formData = await request.formData();
        throw redirect(303, `/restaurants?search=${formData.get("search")}`);
    }
}