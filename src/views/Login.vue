<template>
	<div class="flex justify-center items-center h-screen w-screen">
		<div class="w-full max-w-xs">
			<form
				class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				@submit.prevent="handleSubmit"
			>
				<div class="mb-4">
					<h1 class="font-bold text-center text-2xl">Login</h1>
					<GoogleLogin />
				</div>

				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email"
						>Email</label
					>
					<ValidationProvider
						name="Email"
						rules="required|email"
						v-slot="{ errors }"
					>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							:class="{ 'border-red-500': errors[0] }"
							id="email"
							type="text"
							placeholder="email"
							autocomplete="off"
							v-model="email"
						/>
						<p class="text-red-500 text-xs italic">{{ errors[0] }}</p>
					</ValidationProvider>
				</div>
				<div class="mb-4">
					<label
						class="block text-gray-700 text-sm font-bold mb-2"
						for="password"
						>Password</label
					>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						:class="{ 'border-red-500': errors.password }"
						id="password"
						type="password"
						placeholder="******************"
						autocomplete="off"
						v-model="password"
					/>
					<p class="text-red-500 text-xs italic">{{ errors.password }}</p>
				</div>
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full my-2"
					type="submit"
				>
					Login
				</button>
				<p class="text-sm text-gray-700 mt-4">
					Don't have an account?
					<router-link
						to="/register"
						class="font-bold text-blue-500 hover:text-blue-800"
						>Register
					</router-link>
				</p>
			</form>
		</div>
	</div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { ref, reactive } from "@vue/composition-api";
import GoogleLogin from "@/components/GoogleLogin";
import router from "@/router";
import useAuth from "@/hooks/auth";

export default {
	setup() {
		const { login, loginWithGoogle } = useAuth();

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
			}

			email.value = "";
			password.value = "";
		};
		// auth.onAuthStateChanged((user) => {
		// 	if (user) router.push("/");
		// });

		return { email, password, errors, handleSubmit, loginWithGoogle };
	},
	components: {
		GoogleLogin,
		ValidationProvider,
	},
};
</script>
