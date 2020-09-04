const API_URL = "https://random-word-api.herokuapp.com/word"

const useRandomWord = async () => {
	const res = await fetch(API_URL)
	const data = await res.json()
	return data[0]
}

export default useRandomWord
