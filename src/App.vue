<template>
	<h1>{{hello}} {{$store.state.world}}!</h1>
</template>

<script>
module.exports = {
	data() {
		return {
			hello: 'Hello',
		};
	},
};
</script>
