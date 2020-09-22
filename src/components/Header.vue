<template>
	<header
		class="flex justify-between items-center bg-white shadow-lg py-2 px-4 w-screen select-none"
		:class="{ 'fixed w-screen': $route.name == 'Login' || $route.name == 'Register' }"
	>
		<!-- Navbar -->
		<nav class="flex items-center tracking-wide">
			<!-- <h1 class="text-4xl font-bold text-gray-900">
				<router-link to="/">Joël</router-link>
			</h1>-->
			<ul class="flex font-semibold">
				<li v-for="(route, i) in routes" :key="i">
					<router-link class="mr-6 text-gray-800 hover:text-black" :to="route.path">{{ route.name }}</router-link>
				</li>
			</ul>
		</nav>

		<!-- Auth container -->
		<div class="currentUser flex items-center">
			<div class="flex flex-col text-right text-md" v-if="user">
				<button
					@click="logout"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
				>Logout</button>
			</div>
			<div v-else-if="!user && $route.name !== 'Login' && $route.name !== 'Register'">
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
					<router-link to="/login">Login</router-link>
				</button>
			</div>

			<!-- <router-link to="/login" class="text-lg font-semibold text-blue-500">Login</router-link> -->
		</div>
	</header>
</template>

<script>
import useAuth from "@/hooks/auth";

export default {
	setup() {
		const { user, logout } = useAuth();
		const routes = [
			{
				name: "home",
				path: "/",
			},
			{
				name: "snake",
				path: "/snake",
			},
			{
				name: "hangman",
				path: "/hangman",
			},
			// {
			// 	name: "pong",
			// 	path: "/pong",
			// },
		];

		return { user, logout, routes };
	},
};
</script>

<style scoped>
</style>
