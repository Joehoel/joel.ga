<template>
	<div class="flex items-center justify-center w-screen h-screen">
		<div class="w-full max-w-xs">
			<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" @submit.prevent="handleSubmit">
				<div class="mb-4">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
					<ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
						<input
							class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0] }"
							id="email"
							type="text"
							placeholder="email"
							autocomplete="off"
							v-model="email"
						/>
						<p class="text-xs italic text-red-500">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-4">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
					<input
						class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						:class="{ 'border-red-500': errors.password }"
						id="password"
						type="password"
						placeholder="******************"
						autocomplete="off"
						v-model="password"
					/>
					<p class="text-xs italic text-red-500">{{ errors.password }}</p>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
						type="submit"
					>Sign In</button>
					<router-link
						to="/register"
						class="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
					>Register</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ref, reactive } from "@vue/composition-api";
// import { login } from "../firebase";
// import { auth } from "@/firebase";
import router from "@/router";
import useAuth from "@/hooks/auth";

export default {
	setup() {
		const { login } = useAuth();

		const email = ref("");
		const password = ref("");
		const errors = reactive({ email: "", password: "" });

		const handleSubmit = async () => {
			errors.email = "";
			errors.password = "";
			const { error: err } = await login(email.value, password.value);
			if (err.value !== null) {
				if (err.value.code.includes("email")) {
					errors.email = err.value.message;
				} else {
					errors.password = err.value.message;
				}
			} else {
				router.push("/");
			}
			email.value = "";
			password.value = "";
		};
		// auth.onAuthStateChanged((user) => {
		// 	if (user) router.push("/");
		// });

		return { email, password, errors, handleSubmit };
	},
	components: {
		ValidationProvider,
	},
};
</script>

<style scoped></style>
