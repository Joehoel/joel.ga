<template>
	<div class="flex justify-between text-2xl font-bold mb-3 w-full" style="width: 600px;">
		<h1>
			Score:
			<span class="score">0</span>
		</h1>
		<h1>
			Highscore:
			<span class="highscore">{{highscore}}</span>
		</h1>
	</div>
</template>

<script>
import { getHighscore } from "@/firebase";
import { onMounted, ref } from "@vue/composition-api";

export default {
	props: ["user"],
	setup({ user }) {
		const highscore = ref(0);

		onMounted(async () => {
			if (user && user.value) {
				highscore.value = await getHighscore(user.value.uid);
			}
		});

		return { highscore };
	},
};
</script>

<style scoped>
</style>
