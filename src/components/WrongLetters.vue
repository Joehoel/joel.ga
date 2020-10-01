<template>
	<div class="wrong-letters absolute top-0 right-0 m-6">
		<p v-if="wrongLetters.length > 0" class="text-xl font-semibold">Wrong</p>
		<span v-for="(letter ,i) in wrongLetters" :key="i">
			<span v-if="i != 0">,</span>
			{{letter}}
		</span>
	</div>
</template>

<script>
export default {
	props: ["wrongLetters"],
};
</script>

<style>
</style>
