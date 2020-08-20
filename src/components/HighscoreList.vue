<template>
	<ol id="highscore-list" class="divide-y">
		<li v-for="(user,index) in users" :key="`highscore-${index}`" class="py-2 flex justify-between">
			<span class="font-medium">${user.username}</span>
			<span>${user.highscore}</span>
		</li>
	</ol>
</template>

<script>
import useUsers from "../hooks/users";

export default {
	async setup() {
		const { users } = await useUsers();

		return { users };
	},
};
</script>

<style scoped>
</style>
