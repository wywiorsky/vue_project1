import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: []
	},
	mutations: {
		addTodo({
			todos
		}, {
			name,
			desc,
			status
		}) {
			todos.push({
				name,
				desc,
				status,
			})
		},
		editTodo({
			todos
		}, {
			index,
			name,
			desc,
			status
		}) {
			todos[index] = {
				name,
				desc,
				status,
			}
		},

		removeTodo: ({
			todos
		}, todo) => {
			todos.splice(todos.indexOf(todo), 1)
		}
	},
	getters: {
		getTodoById: (state) => (id) => {
			return state.todos[id]
		},
		all: state => state.todos
	},
	plugins: [new VuexPersistence().plugin]
})