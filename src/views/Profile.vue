<template>
	<Card class="mx-auto w-2/3 mt-6">
		<header class="mb-4">
			<h1 class="text-2xl font-semibold">Profile</h1>
		</header>
		<main>
			<span class="flex items-center font-medium">
				<img
					v-if="user.photoURL"
					:src="user.photoURL"
					alt="profile picture"
					class="w-10 h-10 rounded-full mr-4 border-2 shadow-md"
				/>
				<img
					v-else
					src="../assets/default.jpg"
					alt="profile picture"
					class="w-10 h-10 rounded-full mr-4 border-2 shadow-md"
				/>
				{{ user.displayName }}
			</span>
			<p class="mt-2 font-medium">{{ user.email }}</p>
		</main>
	</Card>
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
