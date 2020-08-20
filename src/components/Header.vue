<template>
	<header class="flex justify-between items-center bg-white shadow-lg py-2 px-4">
		<h1 class="text-4xl font-bold">Games</h1>
		<div class="currentUser flex items-center">
			<!-- <router-link to="/login" class="text-lg font-semibold text-blue-500">Login</router-link> -->
		</div>
	</header>
</template>

<script>
import useUser from "../hooks/user.js";
import { onMounted } from "@vue/composition-api";
import { login } from "../firebase";

export default {
	setup() {
		const { user } = useUser();
		onMounted(async () => {
			await login("jmkuijper@outlook.com", "Edcyhn2003");
			console.log(user.value.displayName);
		});

		return { user };
	},
};
</script>

<style scoped>
</style>
