import { db } from "../firebase"

const useUsers = async () => {
	const snapshot = await db.collection("users").get()
	const users = snapshot.docs.map(doc => doc.data())
	users.sort((a, b) => b.highscore - a.highscore)
	return users
}

export default useUsers
