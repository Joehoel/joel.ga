<template>
	<header
		class="flex justify-between items-center bg-white py-2 shadow-lg px-4 w-screen select-none"
		:class="{
			'fixed w-screen': $route.name == 'Login' || $route.name == 'Register',
		}"
	>
		<!-- Navbar -->
		<nav class="flex items-center tracking-wide">
			<!-- <h1 class="text-4xl font-bold text-gray-900">
				<router-link to="/">Joël</router-link>
			</h1> -->
			<ul class="flex font-semibold">
				<li v-for="(route, i) in routes" :key="i">
					<router-link
						v-if="route.name !== 'Login' && route.name !== 'Register'"
						class="mr-6 pb-4"
						:class="{
							'border-b-2 border-black font-bold': $route.path == route.path,
						}"
						:to="route.path"
						>{{ route.name }}</router-link
					>
				</li>
			</ul>
		</nav>

		<!-- Auth container -->
		<div class="currentUser flex items-center">
			<div class="flex flex-col text-right text-md" v-if="user">
				<router-link to="/login">
					<button
						@click="logout"
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
					>
						Logout
					</button>
				</router-link>
			</div>
			<div v-if="!user">
				<router-link to="/login">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
					>
						Login
					</button>
				</router-link>
			</div>

			<!-- <router-link to="/login" class="text-lg font-semibold text-blue-500">Login</router-link> -->
		</div>
	</header>
</template>

<script>
import useAuth from "@/hooks/auth";
import useToggle from "@/hooks/toggle";
import { computed } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";

export default {
	setup() {
		const { toggle, show } = useToggle();
		const { user, logout } = useAuth();
		const { route, router } = useRouter();
		const routes = router.options.routes;

		return { user, logout, routes, toggle, show };
	},
};
</script>

<style scoped></style>
