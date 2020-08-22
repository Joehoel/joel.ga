import { db } from "@/firebase"

export default function useUsers() {
	const getUsers = async () => {
		const snapshot = await db.collection("users").get()
		const users = snapshot.docs.map(doc => doc.data())
		return users
	}

	const getUser = async uid => {
		const snapshot = await db
			.collection("users")
			.doc(uid)
			.get()
		return snapshot
	}

	return {
		getUser,
		getUsers,
	}
}
