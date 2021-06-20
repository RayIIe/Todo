import Vue from 'vue'
import Vuex from 'vuex'
import { ApiService } from '../services/ApiService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     filter: ''
  },
  mutations: {},
  actions: {
    updateTodo: async (ctx, todo) => {
      await ApiService.updateTodo(todo)
    },
    createTask: async (ctx, task) => {
      await ApiService.createTodo(task)
    },
    deleteTask: async (ctx, id) => {
      await ApiService.deleteTodoById(id)
    },
  },
  modules: {
  }
})
