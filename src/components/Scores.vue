<template>
	<div
		class="flex justify-between text-2xl font-bold mb-3 w-full"
		style="width: 600px"
	>
		<h1>
			Score:
			<span class="score">{{ score }}</span>
		</h1>
		<h1>
			Highscore:
			<span class="highscore">{{ highscore }}</span>
		</h1>
	</div>
</template>

<script>
// import { getHighscore } from "@/firebase";
import useHighscore from "@/hooks/highscore";
import { onMounted, ref } from "@vue/composition-api";
// import useAuth from "@/hooks/auth";
import { auth } from "@/firebase";

export default {
	props: ["score"],
	setup() {
		const highscore = ref(0);
		const { getHighscore } = useHighscore();
		// const { user } = useAuth();

		onMounted(() => {
			auth.onAuthStateChanged(async (user) => {
				if (!user) return;
				highscore.value = await getHighscore(user.uid);
				// updateHighscore(this.user.uid, 41);
			});
		});

		return { highscore };
	},
};
</script>

<style scoped>
</style>
