<template>
	<tr>
		<td class="row-checkbox">
			<input v-model="$store.state.checked[id]" type="checkbox" />
		</td>
		<td class="row-name">
			<router-link :to="url">{{name}}</router-link>
		</td>
		<td class="row-actions">
			<button @click="edit_onClick">Edit</button>
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

	computed: {
		url() {
			return `/tasks/${this.id}`;
		},
	},

	methods: {
		edit_onClick(event) {
			const name = window.prompt('Name', this.name);
			if (name) {
				this.name = name;
			}
		},

		delete_onClick(event) {
			this.$store.dispatch('removeItems', [this.id]);
		},
	},
};
</script>
