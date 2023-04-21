import type { Actions, PageServerLoad } from "./$types";
import { createUserWithEmailAndPassword, type UserCredential, type User, updateProfile, updateCurrentUser } from "firebase/auth";
import { auth } from "$lib/firebase/firebase.client";
import { fail, redirect } from "@sveltejs/kit";
import { FirebaseError } from '@firebase/util'
import { doc, setDoc } from "firebase/firestore";
import { db } from "$lib/firebase/firebase.client";
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
            const userCredential: UserCredential = await createUserWithEmailAndPassword(
                auth,
                formData.get("email") as string,
                formData.get("password") as string
            );
            const user: User = userCredential.user;
            await updateProfile(user, {displayName: formData.get("name") as string});
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                name: user.displayName
            });
            await updateCurrentUser(auth, user);
            cookies.set(
                FIREBASE_AUTH_COOKIE,
                await userCredential.user.getIdToken(),
                {
                    httpOnly: true,
                    path: "/",
                    secure: true
                }
            );
            throw redirect(303, "/")
        } catch (error) {
            if (error instanceof FirebaseError) {
                return fail(503, {
                    errorCode: "auth"
                })
            }
        }
        
    }
};