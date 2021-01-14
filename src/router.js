import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import add from '../components/add.vue'
import list from '../components/list.vue'
import edit from '../components/edit.vue'

export default new Router({
	mode: 'history',
	routes: [
		{
			component: add,
			path: '/add'
		},
		{
			component: list,
			path: '/'
		},
		{
			component: edit,
			path: '/edit/:id'
		}
	]
})
