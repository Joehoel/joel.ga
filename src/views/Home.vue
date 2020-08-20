<template>
	<div>
		<main class="mt-4 mx-4">
			<!-- Games grid -->
			<div class="grid grid-cols-3 gap-4">
				<div class="card p-2 bg-white rounded overflow-hidden shadow-lg">
					<router-link class="text-xl font-bold m-2" to="/snake">Snake</router-link>
				</div>
				<div class="card p-2 bg-white rounded overflow-hidden shadow-lg">
					<router-link class="text-xl font-bold m-2" to="/pong">Pong</router-link>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
