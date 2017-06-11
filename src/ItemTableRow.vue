<template>
	<tr>
		<td class="row-checkbox"><input type="checkbox" /></td>
		<td class="row-name">{{name}}</td>
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
};
</script>
