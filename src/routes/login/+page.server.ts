import type { Actions, PageServerLoad } from "./$types";
import { signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import { auth } from "$lib/firebase/firebase.client";
import { fail, redirect } from "@sveltejs/kit";
import { FirebaseError } from '@firebase/util'
import { FIREBASE_AUTH_COOKIE } from "$lib/utils/formUtils";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.currentUser) {
        throw redirect(302, "/");
    }
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        let formData = await request.formData();

        try {
            const userCredential: UserCredential = await signInWithEmailAndPassword(
                auth,
                formData.get("email") as string,
                formData.get("password") as string
            );
            
            cookies.set(
                FIREBASE_AUTH_COOKIE,
                await userCredential.user.getIdToken(),
                {
                    httpOnly: true,
                    path: "/",
                    secure: true
                }
            );

        } catch (error) {
            if (error instanceof FirebaseError) {
                return fail(503, {
                    errorCode: "auth"
                })
            }
        }

        if (formData.get("returnTo") !== null) {
            throw redirect(301, formData.get("returnTo") as string);
        } else {
            throw redirect(303, "/");
        }
        
    }
};