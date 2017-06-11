const App = require('./App.vue');
const Vue = require('vue');
const store = require('./store.js');
const router = require('./router.js');

const items = [
	{ id: 'abc123', name: 'pppp' },
	{ id: 'foo999', name: 'App' },
	{ id: 'xyz987', name: 'Appp' },
];
store.dispatch('setItems', items);

new Vue({  // eslint-disable-line no-new
	el: '#app',
	store,
	router,
	render: f=>f(App),
});
