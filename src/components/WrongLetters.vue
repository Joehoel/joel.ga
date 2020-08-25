<template>
	<div class="wrong-letters">
		<p v-if="wrongLetters.length > 0">Wrong</p>
		<span v-for="(letter ,i) in wrongLetters" :key="i">
			<span v-if="i != 0">,&nbsp;</span>
			{{letter}}
		</span>
	</div>
</template>

<script>
// import { computed } from "@vue/composition-api";
export default {
	props: ["wrongLetters"],
	// setup({ wrongLetters }) {
	// 	const letters = computed(() => {
	// 		wrongLetters
	// 			.map((letter, i) => <span key={i}>{{ letter }}</span>)
	// 			.reduce(
	// 				(prev, curr) =>
	// 					prev === null ? [curr] : [prev, ", ", curr],
	// 				null
	// 			);
	// 	});

	// 	return { letters };
	// },
};
</script>

<style>
</style>
