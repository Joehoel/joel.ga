<template>
	<header
		class="flex h-16 bg-white shadow-md select-none"
		:class="{
			'': $route.name == 'Login' || $route.name == 'Register',
		}"
	>
		<!-- Navbar -->
		<nav class="flex items-center">
			<!-- <h1 class="text-4xl font-bold text-gray-900"@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap')@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap')@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap')>
				<router-link to="/">Joël</router-link>
			</h1> -->
			<ul class="flex font-bold uppercase">
				<li
					class="ml-6 hover:text-black"
					:class="{
						'text-black border-b-2 border-primary': $route.path == '/',
					}"
				>
					<router-link class="flex items-start" to="/">
						<HomeIcon class="mr-2" />Home
					</router-link>
				</li>
				<li
					class="ml-6 hover:text-black"
					:class="{
						'text-black border-b-2 border-primary': $route.path.includes(
							'/games'
						),
					}"
				>
					<router-link class="flex items-start" to="/games">
						<GamesIcon class="mr-2" />Games
					</router-link>
				</li>
				<li
					class="ml-6 hover:text-black"
					:class="{
						'text-black border-b-2 border-primary': $route.path == '/profile',
					}"
				>
					<router-link class="flex items-start" to="/profile">
						<ProfileIcon class="mr-2" />Profile
					</router-link>
				</li>
			</ul>
		</nav>

		<!-- Auth container -->
		<div class="ml-auto mr-6 flex items-center">
			<div class="" v-if="user">
				<router-link to="/login">
					<button @click="logout" class="btn">Logout</button>
				</router-link>
			</div>
			<div v-if="!user">
				<router-link to="/login">
					<button class="btn">Login</button>
				</router-link>
			</div>

			<!-- <router-link to="/login" class="text-lg font-semibold text-blue-500">Login</router-link> -->
		</div>
	</header>
</template>

<script>
import useAuth from "@/hooks/auth";
import useToggle from "@/hooks/toggle";
import { computed, onUpdated } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";

import HomeIcon from "@/components/icons/HomeIcon";
import GamesIcon from "@/components/icons/GamesIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";

export default {
	components: {
		HomeIcon,
		GamesIcon,
		ProfileIcon,
	},

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
