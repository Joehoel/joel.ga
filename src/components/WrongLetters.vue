<template>
	<div class="card p-4 relative">
		<h1 class="text-3xl font-bold mb-2">Wrong letters</h1>
		<span class="text-xl font-semibold">
			<span v-if="wrongLetters.length == 0" class="italic">None</span>
			<span v-else class="uppercase">
				{{ wrongLetters.join(", ") }}
			</span>
			<span class="absolute right-0 mr-4">{{ wrongLetters.length }}</span>
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
