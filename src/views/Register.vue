<template>
	<div class="flex justify-center items-center w-screen h-screen">
		<div class="w-full max-w-xs">
			<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="handleSubmit">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Username</label>
					<ValidationProvider name="Username" rules="required" v-slot="{errors}">
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0]}"
							id="username"
							type="text"
							placeholder="username"
							autocomplete="off"
							v-model="username"
						/>
						<p class="text-red-500 text-xs italic">{{errors[0]}}</p>
					</ValidationProvider>
				</div>
				<div class="mb-4">
					<ValidationProvider name="Email" rules="required|email" v-slot="{errors}">
						<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0]}"
							id="email"
							type="text"
							placeholder="email"
							autocomplete="off"
							v-model="email"
						/>
						<!-- Error -->
						<p class="text-red-500 text-xs italic">{{errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
					<ValidationProvider name="Password" rules="required|min:6" v-slot="{errors}">
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0]}"
							id="password"
							type="password"
							placeholder="******************"
							autocomplete="off"
							v-model="password"
						/>
						<!-- Error -->
						<p class="text-red-500 text-xs italic">{{errors[0]}}</p>
					</ValidationProvider>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>Register</button>
					<router-link
						class="inline-block align-baseline text-right font-bold text-sm text-blue-500 hover:text-blue-800"
						to="/login"
					>Login</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import useAuth from "@/hooks/auth";
import { ref } from "@vue/composition-api";
import { ValidationProvider } from "vee-validate";

export default {
	setup() {
		const { register } = useAuth();

		const email = ref("");
		const username = ref("");
		const password = ref("");

		const handleSubmit = async () => {
			const { error } = await register(
				email.value,
				username.value,
				password.value
			);

			console.error(error);

			// email.value = "";
			// username.value = "";
			// password.value = "";
		};
		// auth.onAuthStateChanged((user) => {
		// 	if (user) router.push("/");
		// });

		return { email, username, password, handleSubmit };
	},
	components: {
		ValidationProvider,
	},
};
</script>

<style scoped>
</style>
