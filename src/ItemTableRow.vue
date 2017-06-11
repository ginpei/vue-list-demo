<template>
	<tr>
		<td class="row-checkbox">
			<input v-model="$store.state.checked[id]" type="checkbox" />
		</td>
		<td class="row-name">{{name}}</td>
		<td class="row-actions">
			<button @click="delete_onClick">Delete</button>
		</td>
	</tr>
</template>

<script>
const ItemTableRow = require('./ItemTableRow.vue');

module.exports = {
	components: {
		ItemTableRow,
	},
	props: [ 'row' ],
	data() {
		return this.row;
	},

	methods: {
		delete_onClick(event) {
			this.$store.dispatch('removeItems', [this.id]);
		},
	},
};
</script>
