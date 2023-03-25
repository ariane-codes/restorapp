import type { SubmitFunction } from "$app/forms";

export const noFormReset: SubmitFunction = () => {
    return async ({ update }) => {
    await update({ reset: false });
    };
};

export const FIREBASE_AUTH_COOKIE = "FIREBASE_AUTH_COOKIE";