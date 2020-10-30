import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
	apiKey: "AIzaSyDQLAHciwtLFm6BIo7m9SkrcBec2dnnCs0",
	authDomain: "snake-4e27f.firebaseapp.com",
	databaseURL: "https://snake-4e27f.firebaseio.com",
	projectId: "snake-4e27f",
	storageBucket: "snake-4e27f.appspot.com",
	messagingSenderId: "416579751449",
	appId: "1:416579751449:web:e1a1ff37e06dd10bb2a488",
	measurementId: "G-RLR0TCSHS2",
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

export async function login(email, password) {
	if (email.trim() == "" || password.trim() == "") return;

	try {
		await auth.signInWithEmailAndPassword(email, password);
	} catch (e) {
		console.error(e);
	}
}

export async function register(email, username, password) {
	try {
		const userAuth = await auth.createUserWithEmailAndPassword(
			email,
			password
		);

		await userAuth.user.updateProfile({
			displayName: username,
		});
		const user = {
			username,
			highscore: 0,
			createdAt: Date.now(),
			uid: userAuth.user.uid,
			email: userAuth.user.email,
		};

		writeUserData(user);
	} catch (e) {
		console.error(e.message);
	}
}

export async function writeUserData(user) {
	try {
		const userRef = await db.collection("users").doc(user.uid);
		await userRef.set(user);
	} catch (e) {
		console.error(e);
	}
}

export async function getHighscore(uid) {
	const docRef = await db
		.collection("users")
		.doc(uid)
		.get();
	const highscore = await docRef.data().highscore;
	return highscore;
}

export async function updateHighscore(uid, highscore) {
	if (highscore >= (await getHighscore(uid))) {
		db.collection("users")
			.doc(uid)
			.update({
				highscore,
			});
	}
}
