<template>
	<main class="flex flex-col justify-center items-center mt-16">
		<Figure :wrongLetters="wrongLetters" />
		<WrongLetters :wrongLetters="wrongLetters" />
		<Word :selectedWord="selectedWord" :correctLetters="correctLetters" />
	</main>
</template>

<script>
import Figure from "@/components/Figure";
import Word from "@/components/Word";
import WrongLetters from "@/components/WrongLetters";
import { ref, onMounted, onUnmounted } from "@vue/composition-api";

export default {
	setup() {
		// TODO: Change to use: "https://random-word-api.herokuapp.com/word"
		const words = ["application", "programming", "interface", "wizard"];
		const selectedWord = ref(
			words[Math.floor(Math.random() * words.length)]
		);
		console.log(selectedWord.value);
		const correctLetters = ref([]);
		const wrongLetters = ref([]);
		const playable = ref(true);

		const handleKeydown = (event) => {
			const { key, keyCode } = event;
			if (playable && keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();
				if (selectedWord.value.includes(letter)) {
					if (!correctLetters.value.includes(letter)) {
						correctLetters.value = [
							...correctLetters.value,
							letter,
						];
					} else {
						// show(setShowNotification);
					}
				} else {
					if (!wrongLetters.value.includes(letter)) {
						wrongLetters.value = [...wrongLetters.value, letter];
					} else {
						// show(setShowNotification);
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

		return { wrongLetters, selectedWord, correctLetters };
	},

	components: {
		Figure,
		WrongLetters,
		Word,
	},
};
</script>
