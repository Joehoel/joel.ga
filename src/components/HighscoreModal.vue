<template>
	<div
		class="absolute w-1/3 max-w-sm px-6 py-4 mb-8 overflow-hidden bg-white rounded shadow-lg"
		v-show="show"
	>
		<div class="flex justify-between mb-2">
			<h2 class="text-2xl font-semibold">Highscores</h2>
			<button class="text-2xl delete" @click="toggle">&times;</button>
		</div>

		<!-- Highscore list -->
		<HighscoreList />
	</div>
</template>

<script>
import HighscoreList from "@/components/HighscoreList";

export default {
	props: {
		show: Boolean,
		toggle: Function,
	},

	components: {
		HighscoreList,
	},
};
</script>

<style scoped>
</style>
