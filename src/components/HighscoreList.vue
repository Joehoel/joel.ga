<template>
	<ol id="highscore-list" class="divide-y">
		<li
			v-for="(highscore, index) in highscores"
			:key="`highscore-${index}`"
			class="py-2 flex justify-between"
		>
			<span class="font-medium">{{ highscore.username }}</span>
			<span class="font-semibold">{{ highscore.highscore }}</span>
		</li>
	</ol>
</template>

<script>
// import useUsers from "../hooks/users";
import useHighscore from "@/hooks/highscore";
import { ref, onMounted } from "@vue/composition-api";

export default {
	setup() {
		const highscores = ref({});
		const { getHighscores } = useHighscore();
		onMounted(async () => {
			highscores.value = await getHighscores();
		});
		return { highscores };
	},
};
</script>

<style scoped>
</style>
