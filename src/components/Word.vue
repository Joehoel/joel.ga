<template>
	<div class="word">
		<span
			class="letter"
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
