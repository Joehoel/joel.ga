<template>
	<main
		class="container relative flex flex-col items-center justify-center px-4 py-4 mx-auto mt-16 text-center bg-white rounded shadow-lg"
	>
		<Figure :wrongLetters="state.wrongLetters" />
		<Word :selectedWord="state.selectedWord" :correctLetters="state.correctLetters" />
		<WrongLetters :wrongLetters="state.wrongLetters" />
	</main>
</template>

<script>
import Figure from "@/components/Figure";
import Word from "@/components/Word";
import WrongLetters from "@/components/WrongLetters";
import {
	computed,
	onMounted,
	onUnmounted,
	reactive,
} from "@vue/composition-api";

export default {
	setup() {
		// TODO: Change to use: "https://random-word-api.herokuapp.com/word"
		const state = reactive({
			words: ["application", "programming", "interface", "wizard"],
			selectedWord: computed(
				() => state.words[Math.floor(Math.random() * state.words.length)]
			),
			correctLetters: [],
			wrongLetters: [],
			playable: true,
		});

		const handleKeydown = (event) => {
			const { key, keyCode } = event;
			if (state.playable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();
				// If the letter is in the chosen word
				if (state.selectedWord.includes(letter)) {
					// If the letter is in the correct letters
					if (!state.correctLetters.includes(letter)) {
						state.correctLetters = [...state.correctLetters, letter];
					}
					// else {
					// 	// show(setShowNotification);
					// }
					// If the letter is not in the word
				} else {
					if (!state.wrongLetters.includes(letter)) {
						state.wrongLetters = [...state.wrongLetters, letter];
					}
					// else {
					// 	// show(setShowNotification);
					// }
				}
			}
		};

		onMounted(() => {
			window.addEventListener("keydown", handleKeydown);
		});

		onUnmounted(() => {
			window.removeEventListener("keydown", handleKeydown);
		});

		return { state };
	},

	components: {
		Figure,
		WrongLetters,
		Word,
	},
};
</script>
