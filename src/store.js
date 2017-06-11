const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

module.exports = new Vuex.Store({
	state: {
		items: [],
		checked: {},
	},

	getters: {
		someChecked(state) {
			return Object.values(state.checked).some(d=>d);
		},

		allChecked(state) {
			return Object.values(state.checked).every(d=>d);
		},
	},

	mutations: {
		SET_ITEMS(state, value) {
			state.items = value;
		},

		INIT_CHECKED( state, value) {
			state.checked = value;
		},

		TOGGLE_CHECKED_ALL(state, value) {
			const o = state.checked;
			Object.keys(o).forEach(d=>o[d]=value);
		},
	},

	actions: {
		setItems({ commit }, items) {
			commit('SET_ITEMS', items);

			const checked = items.reduce((r,d)=>(r[d.id]=false,r),{});
			commit('INIT_CHECKED', checked);
		},

		toggleCheckAll({ commit }, checked) {
			commit('TOGGLE_CHECKED_ALL', checked);
		},
	},
});
