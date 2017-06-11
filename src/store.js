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

		INIT_CHECKED( state, items) {
			state.checked = state.items.reduce((r,d)=>(r[d.id]=false,r),{});
		},

		TOGGLE_CHECKED_ALL(state, value) {
			const o = state.checked;
			Object.keys(o).forEach(d=>o[d]=value);
		},

		ADD_ITEM(state, value) {
			state.items.push(value);
		},
	},

	actions: {
		setItems({ commit }, items) {
			commit('SET_ITEMS', items);

			commit('INIT_CHECKED');
		},

		toggleCheckAll({ commit }, checked) {
			commit('TOGGLE_CHECKED_ALL', checked);
		},

		createNewItem({ commit }, data) {
			data.id = 'item-' + Date.now();
			commit('ADD_ITEM', data);

			commit('INIT_CHECKED');
		},
	},
});
