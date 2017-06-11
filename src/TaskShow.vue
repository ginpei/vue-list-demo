<template>
	<div>
		<h1>{{name}}</h1>
	</div>
</template>

<script>
module.exports = {
	data() {
		return this.$store.state.items.find(d=>d.id===this.$route.params.id);
	},
};
</script>
