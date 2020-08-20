import { auth } from "../firebase"
import { ref, onMounted, onUnmounted } from "@vue/composition-api"

const useAuth = () => {
	const user = ref(auth.currentUser)
	let unsubscribe

	onMounted(() => {
		unsubscribe = auth.onAuthStateChanged(async firebaseUser => {
			user.value = await firebaseUser
		})
	})

	onUnmounted(() => {
		unsubscribe()
	})

	return {
		user,
	}
}

export default useAuth
