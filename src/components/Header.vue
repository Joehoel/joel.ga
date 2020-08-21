<template>
	<header
		class="flex justify-between items-center bg-white shadow-lg py-2 px-4"
		:class="{ 'fixed w-screen': $route.name == 'Login' || $route.name == 'Register' }"
	>
		<h1 class="text-4xl font-bold">{{$route.name}}</h1>
		<div class="currentUser flex items-center">
			<div class="flex flex-col text-right text-md" v-if="user">
				<span>Currently logged in as:</span>
				<span class="font-semibold">{{user.displayName}}</span>
			</div>

			<!-- <router-link to="/login" class="text-lg font-semibold text-blue-500">Login</router-link> -->
		</div>
	</header>
</template>

<script>
import useAuth from "@/hooks/auth";

export default {
	setup() {
		const { user } = useAuth();

		return { user };
	},
};
</script>

<style scoped>
</style>
