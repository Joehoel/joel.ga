import { auth, db } from "@/firebase";
import { ref, onMounted, onUnmounted } from "@vue/composition-api";

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
		} catch (e) {
			error.value = e;
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
		} catch (e) {
			error.value = e;
		}

		return { user, error };
	};

	return {
		user,
		login,
		logout,
		register,
	};
}
