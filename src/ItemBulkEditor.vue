<style>
.itemBulkEditor {
	margin-bottom: 1em;
}
</style>

<template>
	<div class="itemBulkEditor">
		<button :disabled="!$store.getters.someChecked" @click="delete_onClick">Delete</button>
	</div>
</template>

<script>
module.exports = {
	methods: {
		delete_onClick(event) {
			const checked = this.$store.state.checked;
			const checkedIds = Object.keys(checked).filter(id=>checked[id]);
			this.$store.dispatch('removeItems', checkedIds);
		},
	},
};
</script>
