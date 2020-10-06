import { auth, db, GoogleProvider } from "@/firebase";
import { ref, onMounted, onUnmounted } from "@vue/composition-api";
import router from "@/router";

export default function useAuth() {
	const user = ref(auth.currentUser);
	let unsubscribe;

	onMounted(() => {
		unsubscribe = auth.onAuthStateChanged(firebaseUser => {
			user.value = firebaseUser;
		});
	});

	onUnmounted(() => {
		unsubscribe();
	});

	const login = async (email, password) => {
		const user = ref({});
		const error = ref(null);

		// if (email.trim() == "" || password.trim() == "") {
		// 	return
		// }

		try {
			const firebaseUser = await auth.signInWithEmailAndPassword(
				email,
				password
			);
			user.value = firebaseUser;
			router.push("/");
		} catch (e) {
			error.value = e;
		}

		return { user, error };
	};

	const loginWithGoogle = async () => {
		console.log("Logging in with google");
		const user = ref({});
		const error = ref(null);

		try {
			const result = await auth.signInWithPopup(GoogleProvider);
			const token = await result.credential.accesToken;
			const firebaseUser = await result.user;
			const { displayName: username, uid, email } = firebaseUser;

			const user = {
				username,
				highscore: 0,
				createdAt: Date.now(),
				uid,
				email,
			};

			const userRef = await db.collection("users").doc(user.uid);
			await userRef.set(user);
			router.push("/");
		} catch (e) {
			error.value = e;
			console.error(error.value);
		}

		return { user, error };
	};

	const logout = () => {
		auth.signOut();
	};

	const register = async (email, username, password) => {
		const user = ref({});
		const error = ref(null);

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

			try {
				const userRef = await db.collection("users").doc(user.uid);
				await userRef.set(user);
			} catch (e) {
				error.value = e;
			}
			router.push("/");
		} catch (e) {
			error.value = e;
		}

		return { user, error };
	};

	return {
		user,
		login,
		loginWithGoogle,
		logout,
		register,
	};
}
