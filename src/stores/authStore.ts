import { writable, type Readable, type Writable } from "svelte/store";
import { auth } from "$lib/firebase/firebase.client";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateEmail, updatePassword, signInWithEmailAndPassword, type User, type UserCredential } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "$lib/firebase/firebase.client";

export type AuthStore = {
    isLoading: boolean,
    currentUser: User | null;
}

export const authStore: Writable<AuthStore> = writable({
    isLoading: true,
    currentUser: null
})

export const authHandlers = {
    signup: async (email: string, password: string) => {
        
        const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user: User = userCredential.user;
        
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email
        });

    },
    login: async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    },
    logout: async () => {
        await signOut(auth);
    },
    resetPassword: async (email: string) => {
        await sendPasswordResetEmail(auth, email);
    },
    // updateEmail: async (email: string) => {
    //     await updateEmail(auth, email);
    // },
    // updatePassword: async (password: string) => {
    //     await updatePassword(auth, password);
    // }
}