import { invalidateAll } from "$app/navigation";
import { auth } from "$lib/firebase/firebase.client"
import { signOut } from "firebase/auth"

export const logout = async () => {
    await signOut(auth);
    await fetch("/logout", { method: "POST"});
    await invalidateAll();
}