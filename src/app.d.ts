// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			currentUser: {uid: string; name: string; email: string} | null;
		}
		interface PageData {
			currentUser: {uid: string; name: string; email: string} | null;
		}
		// interface Platform {}
	}
}

export {};
