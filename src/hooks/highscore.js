import { db } from "@/firebase"
import useUsers from "@/hooks/users"

export default function useHighscore() {
	const { getUser, getUsers } = useUsers()

	const getHighscore = async uid => {
		const user = await getUser(uid)
		const highscore = await user.highscore
		return highscore
	}

	const updateHighscore = async (uid, highscore) => {
		if (highscore >= (await getHighscore(uid))) {
			db.collection("users")
				.doc(uid)
				.update({
					highscore,
				})
		}
	}

	const getHighscores = async () => {
		const users = await getUsers()
		users.sort((a, b) => b.highscore - a.highscore)

		const data = users.map(({ username, highscore }) => {
			return {
				username,
				highscore,
			}
		})
		return data
	}

	return {
		getHighscores,
		getHighscore,
		updateHighscore,
	}
}
