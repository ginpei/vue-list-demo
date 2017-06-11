const TaskIndex = require('./TaskIndex.vue');
const TaskShow = require('./TaskShow.vue');
const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

module.exports = new VueRouter({
	routes: [
		{ path: '/', component: TaskIndex },
		{ path: '/tasks/:id', component: TaskShow },
	],
});
