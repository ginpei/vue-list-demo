<style>
.itemTable {
	border-collapse: collapse;
	width: 100%;
}
.itemTable tbody tr:hover {
	background-color: #ffe;
}
.itemTable th,
.itemTable td {
	border: 1px solid #eee;
	padding: 0.4em 1em;
}
.itemTable .row-checkbox {
	text-align: center;
	width: 30px;
}
.itemTable .row-name {
}
</style>

<template>
	<table class="itemTable">
		<thead>
			<tr>
				<th class="row-checkbox">
					<input :checked="$store.getters.allChecked" @click="allCheckbox_onClick" type="checkbox" />
				</th>
				<th class="row-name">Name</th>
			</tr>
		</thead>
		<tbody>
			<item-table-row v-for="d in $store.state.items" :key="d.id" :row="d"></item-table-row>
		</tbody>
	</table>
</template>

<script>
const ItemTableRow = require('./ItemTableRow.vue');

module.exports = {
	components: {
		ItemTableRow,
	},

	data() {
		return {
		};
	},

	methods: {
		allCheckbox_onClick(event) {
			const checked = event.currentTarget.checked;
			this.$store.dispatch('toggleCheckAll', checked);
		},
	},
};
</script>
