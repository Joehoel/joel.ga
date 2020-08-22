<template>
	<div>
		<main class="mt-4 mx-4">
			<!-- Games grid -->
			<div class="flex items-start gap-4">
				<router-link to="/snake">
					<div class="card p-2 bg-white rounded overflow-hidden shadow-lg">
						<span class="text-xl font-bold m-2">Snake</span>
						<div class="preview p-2">
							<img class="w-64 rounded" src="../assets/snake.gif" alt="snake" />
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
	</div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
