<template>
	<div class="flex justify-center items-center h-screen w-screen">
		<div class="w-full max-w-xs">
			<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="onSubmit">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						placeholder="email"
						autocomplete="off"
						v-model="email"
					/>
					<p class="text-red-500 text-xs italic"></p>
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						autocomplete="off"
						v-model="password"
					/>
					<p class="text-red-500 text-xs italic"></p>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>Sign In</button>
					<a
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						href="#"
					>Forgot Password?</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { login } from "../firebase";
import { auth } from "@/firebase";
import router from "@/router";

export default {
	setup() {
		const email = ref("");
		const password = ref("");

		const onSubmit = () => {
			login(email.value, password.value);
			email.value = "";
			password.value = "";
		};
		auth.onAuthStateChanged((user) => {
			if (user) router.push("/");
		});

		return { email, password, onSubmit };
	},
};
</script>

<style scoped>
</style>
