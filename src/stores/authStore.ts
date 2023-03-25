import { writable, type Readable, type Writable } from "svelte/store";
import type { User } from "firebase/auth";

export type AuthStore = {
    isLoading: boolean,
    currentUser: User | null;
    userName: string | null;
}

export const authStore: Writable<AuthStore> = writable({
    isLoading: true,
    currentUser: null,
    userName: null
})