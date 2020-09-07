<template>
	<div class="word w-full text-4xl flex items-center justify-center">
		<span
			class="inline-flex items-center justify-center border-b-4 border-blue-600 mx-1 w-16 h-16"
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
