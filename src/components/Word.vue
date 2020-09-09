<template>
	<div class="flex items-center justify-center w-full text-4xl word">
		<span
			class="inline-flex items-center justify-center w-16 h-16 mx-1 border-b-4 border-blue-600"
			v-for="(letter, index) in selectedWord"
			:key="index"
		>{{correctLetters.includes(letter) ? letter : ''}}</span>
	</div>
</template>

<script>
export default {
	props: ["selectedWord", "correctLetters"],
};
</script>

<style>
</style>
