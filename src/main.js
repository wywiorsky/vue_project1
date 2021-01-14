import Vue from 'vue'

import App from './App.vue'
import store from '../store'
import router from './router'

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);


new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})