const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	state: {
		items: [],
		checked: {},
	},

	mutations: {
		SET_ITEMS(state, value) {
			state.items = value;
		},

		INIT_CHECKED( state, value) {
			state.checked = value;
		},
	},

	actions: {
		setItems({ commit }, items) {
			commit('SET_ITEMS', items);

			const checked = items.reduce((r,d)=>(r[d.id]=false,r),{});
			commit('INIT_CHECKED', checked);
		},
	},
});
