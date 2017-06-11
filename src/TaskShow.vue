<template>
	<div>
		<h1>{{name}}</h1>
	</div>
</template>

<script>
module.exports = {
	data() {
		const items = this.$store.state.items;
		const id = this.$route.params.id;
		console.debug(items.length, items.find(d=>d.id===id));
		return items.find(d=>d.id===id);
	},
};
</script>
