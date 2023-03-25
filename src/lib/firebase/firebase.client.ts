// Import the functions you need from the SDKs you need
import { invalidateAll } from "$app/navigation";
import { initializeApp, getApps, getApp, deleteApp, type FirebaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, setPersistence, inMemoryPersistence, onIdTokenChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

async function setToken(token: string) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ token })
	};

	await fetch('/api/token', options);
}



// Initialize Firebase

function listenForAuthChanges(firebaseApp: FirebaseApp) {

	onIdTokenChanged(
		getAuth(firebaseApp),
		async (user) => {
			if (user) {
				const token = await user.getIdToken();
				await setToken(token);
			} else {
				await setToken('');
			}
			await invalidateAll();
		},
		(err) => console.error(err.message)
	);
}

let firebaseApp: FirebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
} else {
    firebaseApp = getApp();
    deleteApp(firebaseApp);
    firebaseApp = initializeApp(firebaseConfig);
    listenForAuthChanges(firebaseApp);
}



export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);


