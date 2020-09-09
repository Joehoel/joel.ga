<template>
	<div class="flex items-center justify-center w-screen h-screen">
		<div class="w-full max-w-xs">
			<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" @submit.prevent="handleSubmit">
				<div class="mb-4">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="email">Username</label>
					<ValidationProvider name="Username" rules="required" v-slot="{errors}">
						<input
							class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0]}"
							id="username"
							type="text"
							placeholder="username"
							autocomplete="off"
							v-model="username"
						/>
						<p class="text-xs italic text-red-500">{{errors[0]}}</p>
					</ValidationProvider>
				</div>
				<div class="mb-4">
					<ValidationProvider name="Email" rules="required|email" v-slot="{errors}">
						<label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
						<input
							class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0]}"
							id="email"
							type="text"
							placeholder="email"
							autocomplete="off"
							v-model="email"
						/>
						<!-- Error -->
						<p class="text-xs italic text-red-500">{{errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-6">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
					<ValidationProvider name="Password" rules="required|min:6" v-slot="{errors}">
						<input
							class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0]}"
							id="password"
							type="password"
							placeholder="******************"
							autocomplete="off"
							v-model="password"
						/>
						<!-- Error -->
						<p class="text-xs italic text-red-500">{{errors[0]}}</p>
					</ValidationProvider>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
						type="submit"
					>Register</button>
					<router-link
						class="inline-block text-sm font-bold text-right text-blue-500 align-baseline hover:text-blue-800"
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
