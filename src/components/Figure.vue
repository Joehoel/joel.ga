<template>
	<div class="figure-container">
		<svg height="250" width="200">
			<!-- Rod -->
			<line x1="60" y1="20" x2="140" y2="20" />
			<line x1="140" y1="20" x2="140" y2="50" />
			<line x1="60" y1="20" x2="60" y2="230" />
			<line x1="20" y1="230" x2="100" y2="230" />

			<!-- Head -->
			<circle v-show="wrongLetters.length > 0" cx="140" cy="70" r="20" />
			<!-- Body -->
			<line v-show="wrongLetters.length > 1" x1="140" y1="90" x2="140" y2="150" />
			<!-- Arms -->
			<line v-show="wrongLetters.length > 2" x1="140" y1="120" x2="120" y2="100" />
			<line v-show="wrongLetters.length > 3" x1="140" y1="120" x2="160" y2="100" />
			<!-- Legs -->
			<line v-show="wrongLetters.length > 5" x1="140" y1="150" x2="120" y2="180" />
			<line v-show="wrongLetters.length > 6" x1="140" y1="150" x2="160" y2="180" />
		</svg>
	</div>
</template>

<script>
// import { ref } from "@vue/composition-api";

export default {
	props: ["wrongLetters"],
	// setup({ wrongLetters }) {
	// 	const errors = ref(wrongLetters.length);

	// 	console.log(errors.value);
	// 	return { errors };
	// },
};
</script>

<style scoped>
.figure-container {
	fill: transparent;
	stroke: #000;
	stroke-width: 4px;
	stroke-linecap: round;
}
</style>
