import { db } from "../firebase"
import { ref } from "@vue/composition-api"

const useUsers = async () => {
	const users = ref(null)
	const snapshot = await db.collection("users").get()
	users.value = snapshot.docs.map(doc => doc.data())

	return {
		users,
	}
}

export default useUsers
