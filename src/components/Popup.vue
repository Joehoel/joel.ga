<template>
	<div class="popup">
		<h2>{finalMessage}</h2>
		<h3>{finalMessageRevealWord}</h3>
		<button
			@click="playAgain"
			class="absolute top-0 left-0 m-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
		>Play again</button>
	</div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
	setup({ correctLetters, wrongLetters, selectedWord, playable, playAgain }) {
		const finalMessage = ref("");
		const finalMessageRevealWord = ref("");

		if (
			checkWin(correctLetters.value, wrongLetters.value, selectedWord.value) ===
			"win"
		) {
			finalMessage.value = "Congratulations! You won! 😃";
			playable.value = false;
		} else if (
			checkWin(correctLetters.value, wrongLetters.value, selectedWord.value) ===
			"lose"
		) {
			finalMessage.value = "Unfortunately you lost. 😕";
			finalMessageRevealWord.value = `...the word was: ${selectedWord.value}`;
			playable.value = false;
		}

		const checkWin = (correct, wrong, word) => {
			let status = "win";

			// Check for win
			word.split("").forEach((letter) => {
				if (!correct.includes(letter)) {
					status = "";
				}
			});

			// Check for lose
			if (wrong.length === 6) status = "lose";

			return status;
		};

		return { playAgain, finalMessage, finalMessageRevealWord };
	},
};
</script>

<style>
</style>
