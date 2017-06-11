<style>
.newItemForm {
	margin-bottom: 1em;
}
</style>

<template>
	<form @submit="onsubmit" class="newItemForm">
		<input v-model="name" type="text" placeholder="ex) Buy milk" />
		<button>Create</button>
	</form>
</template>

<script>
module.exports = {
	data() {
		return {
			name: '',
		};
	},

	methods: {
		onsubmit(event) {
			event.preventDefault();

			// do nothing if empty
			if (!this.name) {
				return;
			}

			const data = {
				name: this.name,
			};
			this.$store.dispatch('createNewItem', data);

			this.name = '';
		},
	},
};
</script>
