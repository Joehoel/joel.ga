<template>
	<div>
		<main class="mx-4 mt-4">
			<!-- Games grid -->
			<div class="flex items-start gap-4">
				<router-link to="/snake">
					<div class="p-2 overflow-hidden bg-white rounded shadow-lg card">
						<span class="m-2 text-xl font-bold">Snake</span>
						<div class="p-2 preview">
							<img class="w-64 rounded" src="../assets/snake.gif" alt="snake" />
						</div>
					</div>
				</router-link>
				<router-link to="/hangman">
					<div class="p-2 overflow-hidden bg-white rounded shadow-lg card">
						<span class="m-2 text-xl font-bold">Hangman</span>
						<div class="p-2 preview">
							<img class="w-64 rounded" src="../assets/snake.gif" alt="snake" />
						</div>
					</div>
				</router-link>
				<!-- <router-link to="/pong">
					<div class="p-2 overflow-hidden bg-white rounded shadow-lg card">
						<span class="m-2 text-xl font-bold">Pong</span>
					</div>
				</router-link>-->
			</div>
		</main>
	</div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
