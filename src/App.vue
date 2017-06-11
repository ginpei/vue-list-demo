<template>
	<div>
		<h1>Items</h1>
		<new-item-form></new-item-form>
		<item-bulk-editor></item-bulk-editor>
		<item-table></item-table>
	</div>
</template>

<script>
const NewItemForm = require('./NewItemForm.vue');
const ItemBulkEditor = require('./ItemBulkEditor.vue');
const ItemTable = require('./ItemTable.vue');

module.exports = {
	components: {
		NewItemForm,
		ItemBulkEditor,
		ItemTable,
	},
};
</script>
