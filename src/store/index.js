import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    filter: '',
  },
  getters: {
    filteredTodos: state => state.todos.filter(todo => todo.title.toLowerCase().includes(state.filter.toLowerCase())),
    todos: (state, getters) => getters.filteredTodos,
    doneTodos: (state, getters) => getters.filteredTodos.filter(item => item.done),
    inProgressTodos: (state, getters) => getters.filteredTodos.filter(item => !item.done),
  },
  mutations: {
    SET_TODOS (state, todos) {
      state.todos = todos
    },
  },
  actions: {
    createTask: ({ state }, task) => {
      state.todos.push(task)
    },
    deleteTask: ({ state }, id) => {
      state.todos = state.todos.filter(x => x.id !== id)
    },
  },
  modules: {
  }
})
