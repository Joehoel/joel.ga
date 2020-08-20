<template>
	<main class="flex flex-col justify-center items-center mt-16">
		<!-- Highscore overlay -->
		<div
			class="bg-black bg-opacity-25 w-screen h-screen absolute overflow-hidden inset-0"
			v-show="show"
			@click="toggle"
		></div>

		<!-- Highscore modal -->
		<HighscoreModal :show="show" :toggle="toggle" />

		<!-- Scores container -->
		<Scores :user="user" />
		<!-- <h3 id="start">Press any key to start...</h3> -->

		<!-- Game -->
		<canvas width="600" height="600" class="bg-gray-900 rounded shadow-lg"></canvas>

		<!-- View Highscores button -->
		<button
			id="highscore-button"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded shadow-lg"
			@click="toggle"
		>View all highscores</button>
	</main>
</template>

<script>
import HighscoreModal from "@/components/HighscoreModal";
import Scores from "@/components/Scores";

import useToggle from "@/hooks/toggle";
import useAuth from "@/hooks/auth";

export default {
	setup() {
		const { user } = useAuth();
		const { show, toggle } = useToggle();

		return {
			show,
			toggle,
			user,
		};
	},
	components: {
		HighscoreModal,
		Scores,
	},
};
</script>

<style scoped>
</style>
