<template>
	<main
		class="flex flex-col justify-center items-center mt-16 py-4 bg-white rounded shadow-lg container mx-auto px-4 text-center relative"
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

		// const words = [];

		// const selectedWord = ref(words[Math.floor(Math.random() * words.length)]);

		console.log(state.selectedWord);

		// const correctLetters = ref([]);
		// const wrongLetters = ref([]);
		// const playable = ref(true);

		// const playAgain = () => {
		// 	state.playable = true;

		// 	state.correctLetters = [];
		// 	state.wrongLetters = [];

		// 	state.selectedWord =
		// 		state.words[Math.floor(Math.random() * state.words.length)];
		// };

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
