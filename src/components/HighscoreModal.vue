<template>
	<div
		class="py-4 px-6 max-w-sm rounded overflow-hidden shadow-lg absolute bg-white w-1/3"
		v-show="show"
	>
		<div class="flx justify-between mb-2">
			<h2 class="text-2xl font-semibold">Highscores</h2>
			<button class="delete text-2xl" @click="toggle">&times;</button>
		</div>

		<!-- Highscore list -->
		<Suspense>
			<template #default>
				<HighscoreList />
			</template>
			<template #fallback>
				<div>Loading...</div>
			</template>
		</Suspense>
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
