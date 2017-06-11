const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	state: {
		items: [
			{ name: 'pppp' },
			{ name: 'App' },
			{ name: 'Appp' },
		],
	},

	mutations: {
	},

	actions: {
	},
});
