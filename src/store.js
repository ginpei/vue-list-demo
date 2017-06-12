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
			return state.checked.length > 0 && Object.values(state.checked).every(d=>d);
		},
	},

	mutations: {
		SET_ITEMS(state, value) {
			state.items = value;
		},

		INIT_CHECKED(state, items) {
			state.checked = state.items.reduce((r,d)=>(r[d.id]=state.checked[d.id]||false,r),{});
		},

		TOGGLE_CHECKED_ALL(state, value) {
			const o = state.checked;
			Object.keys(o).forEach(d=>o[d]=value);
		},

		ADD_ITEM(state, value) {
			state.items.push(value);
		},

		REMOVE_ITEM(state, id) {
			const index = state.items.findIndex(d=>d.id===id);
			if (index >= 0) {
				state.items.splice(index, 1);
			}
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

		removeItems({ commit }, ids) {
			ids.forEach(id=>commit('REMOVE_ITEM', id));

			commit('INIT_CHECKED');
		},
	},
});
