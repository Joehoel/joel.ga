<template>
	<ol id="highscore-list" class="divide-y">
		<li v-for="(user, index) in users" :key="`highscore-${index}`" class="py-2 flex justify-between">
			<span class="font-medium">{{user.username}}</span>
			<span>{{user.highscore}}</span>
		</li>
	</ol>
</template>

<script>
import useUsers from "../hooks/users";
import { ref, onMounted } from "@vue/composition-api";

export default {
	setup() {
		const users = ref(null);
		onMounted(async () => {
			users.value = await useUsers();
		});
		return { users };
	},
};
</script>

<style scoped>
</style>
