<template>
	<!-- <main>
		<article class="card mx-auto w-3/4 mt-6">
			<main class="mx-6 my-4">
				<header>
					<h1 class="font-bold text-4xl">Welcome</h1>
				</header>
				<section class="mt-2">
					<p>
						Welcome at
						<router-link class="link" to="/">joel.ga</router-link>, this website
						is my personal side-project where I can do what ever I want. And its
						here for you to admire and enjoy.
					</p>
					<section class="mt-2">
						On this website you can read about me and my projects and play some
						games. <br />
						You can play / view them over
						<router-link to="/games" class="link">here</router-link>
					</section>
				</section>
				<section class="mt-4">
					<h2 class="text-2xl">About me</h2>
				</section>
			</main>
		</article>
	</main> -->
	<article class="card mx-auto w-3/4 mt-6">
		<main class="mx-6 my-4">
			<header class="flex justify-between items-center">
				<h1 class="text-4xl font-semibold">Profile</h1>
				<img
					v-if="user.photoURL"
					:src="user.photoURL"
					alt="profile picture"
					class="w-16 h-16 rounded-full mr-4 border-2 shadow-md"
				/>
				<!-- <img
					v-else
					src="../assets/default.jpg"
					alt="profile picture"
					class="w-16 h-16 rounded-full mr-4 border-2 shadow-md"
				/> -->
			</header>
			<section class="mt-2 text-xl">
				<p><span class="font-bold mr-2">Name: </span>{{ user.displayName }}</p>
				<p><span class="font-bold mr-2">Email: </span>{{ user.email }}</p>
			</section>
		</main>
	</article>
</template>

<script>
import Card from "@/components/Card";
import useAuth from "@/hooks/auth";

export default {
	setup() {
		const { user } = useAuth();
		return { user };
	},

	components: {
		Card,
	},
};
</script>

<style>
</style>
