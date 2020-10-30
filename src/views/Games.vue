<template>
	<main class="mt-4 mx-4">
		<!-- Games grid -->
		<div class="flex sm:justify-start gap-4 flex-wrap justify-center">
			<router-link to="/games/snake">
				<div class="card p-2">
					<span class="text-xl font-bold m-2">Snake</span>
					<div class="preview p-2">
						<img class="w-64 rounded" src="../assets/snake.gif" alt="snake" />
					</div>
				</div>
			</router-link>
			<router-link to="/games/hangman">
				<div class="card p-2">
					<span class="text-xl font-bold m-2">Hangman</span>
					<div class="preview p-2">
						<img class="w-64 rounded" src="../assets/hangman.gif" alt="snake" />
					</div>
				</div>
			</router-link>
			<router-link to="/games/pong">
				<div class="card p-2">
					<span class="text-xl font-bold m-2">Pong</span>
					<div class="preview p-2">
						<img class="w-64 rounded" src="../assets/pong.gif" alt="snake" />
					</div>
				</div>
			</router-link>
			<!-- <router-link to="/pong">
					<div class="card p-2 bg-white rounded overflow-hidden shadow-lg">
						<span class="text-xl font-bold m-2">Pong</span>
					</div>
				</router-link>-->
		</div>
	</main>
</template>

<script>
export default {};
</script>

<style>
</style>
