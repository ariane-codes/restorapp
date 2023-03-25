import type { Actions, PageServerLoad } from "./$types";
import { signInWithEmailAndPassword, updateCurrentUser, type UserCredential } from "firebase/auth";
import { auth } from "$lib/firebase/firebase.client";
import { fail, redirect } from "@sveltejs/kit";
import { FirebaseError } from '@firebase/util'
import { FIREBASE_AUTH_COOKIE } from "$lib/utils/formUtils";

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

            throw redirect(303, "/");

        } catch (error) {
            if (error instanceof FirebaseError) {
                console.log(error.code);
                return fail(503, {
                    errorCode: "auth"
                })
            }
        }
        
    }
};