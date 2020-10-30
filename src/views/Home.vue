<template>
	<main>
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
				<!-- <section class="mt-4">
					<h2 class="text-2xl">About me</h2>
				</section> -->
			</main>
		</article>
	</main>
</template>

<script>
import Card from "@/components/Card";
import Test from "@/components/Test";
// @ is an alias to /src

export default {
	components: {
		Card,
		Test,
	},
};
</script>
