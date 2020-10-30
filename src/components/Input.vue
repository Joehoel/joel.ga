<template>
	<div class="form-group">
		<label :for="name">{{ label }}</label>
		<input :type="type" :placeholder="placeholder" />
	</div>
</template>

<script>
export default {
	props: {
		type: String,
		label: String,
		name: String,
		placeholder: String,
	},
};
</script>

<style>
</style>
