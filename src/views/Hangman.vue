<template>
	<main class="mx-auto w-3/4 mt-6">
		<!-- <section class="card p-6 flex flex-col items-center justify-center mb-4">
			<Figure :wrongLetters="wrongLetters" />
			<Word :selectedWord="selectedWord" :correctLetters="correctLetters" />
		</section>
		<section class="grid grid-cols-2 gap-4">
			<Status
				:correctLetters="correctLetters"
				:wrongLetters="wrongLetters"
				:selectedWord="selectedWord"
				:togglePlayable="togglePlayable"
				:playAgain="playAgain"
			/>
			<WrongLetters :wrongLetters="wrongLetters" />
		</section> -->
		<section class="card p-6 text-4xl font-bold text-center">
			Under maintanence
		</section>
	</main>
</template>

<script>
import Figure from "@/components/Figure";
import Word from "@/components/Word";
import Status from "@/components/Status";
import WrongLetters from "@/components/WrongLetters";
import useFetch from "@/hooks/fetch";
import {
	computed,
	onBeforeMount,
	onMounted,
	onUnmounted,
	reactive,
	ref,
} from "@vue/composition-api";

export default {
	setup() {
		// TODO: Change to use: "https://random-word-api.herokuapp.com/word"
		const { response, loading, error } = useFetch(
			"https://random-word-api.herokuapp.com/word"
		);
		const state = reactive({
			words: ["application", "programming", "interface", "wizard"],
			selectedWord: computed(
				() => state.words[Math.floor(Math.random() * state.words.length)]
			),
			correctLetters: [],
			wrongLetters: [],
			playable: true,
			playAgain: () => {
				// playable = true
			},
		});

		const handleKeydown = (event) => {
			const { key, keyCode } = event;
			if (state.playable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();
				// If the letter is in the chosen word
				if (state.selectedWord.includes(letter)) {
					// If the letter is in the correct letters
					if (!state.correctLetters.includes(letter)) {
						state.correctLetters.push(letter);
					}
				} else {
					if (!state.wrongLetters.includes(letter)) {
						state.wrongLetters.push(letter);
					}
				}
			}
		};

		onMounted(() => {
			window.addEventListener("keydown", handleKeydown);
		});

		onUnmounted(() => {
			window.removeEventListener("keydown", handleKeydown);
		});

		return { ...state };
	},

	components: {
		Figure,
		WrongLetters,
		Word,
		Status,
	},
};
</script>
