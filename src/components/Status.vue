<template>
	<section class="card p-4">
		<h1 class="font-bold text-3xl mb-2">Status</h1>
		<p>{{ message }}</p>
		<p>{{ messageRevealWord }}</p>
	</section>
</template>

<script>
import { onMounted, reactive, watch, watchEffect } from "@vue/composition-api";
import checkWin from "@/utils/helpers";

export default {
	props: [
		"correctLetters",
		"wrongLetters",
		"selectedWord",
		"togglePlayable",
		"playAgain",
	],
	setup({
		correctLetters,
		wrongLetters,
		selectedWord,
		togglePlayable,
		playAgain,
	}) {
		const state = reactive({
			message: "Playing...",
			messageRevealWord: "",
		});

		if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
			state.message = "Congratulations! You won! 😃";
		} else if (
			checkWin(correctLetters, wrongLetters, selectedWord) === "lose"
		) {
			state.message = "Unfortunately you lost. 😕";
			state.messageRevealWord = `The word was: ${selectedWord}`;
		}

		return state;
	},
};
</script>

<style>
</style>
