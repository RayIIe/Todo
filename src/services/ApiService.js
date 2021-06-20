import axios from 'axios'

export class ApiService {
  static async updateTodo (todo) {
    const response = await axios.put(`/todos/${todo.id}`, {
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
      projectId: todo.projectId,
      dateStarted: todo.dateStarted,
      done: todo.done,
    })
    return response.data
  }

  static async deleteTodoById (id) {
    const response = await axios.delete(`/todos/${id}`)
    return response.data
  }

  static async createTodo (todo) {
    const response = await axios.post('/todos', {
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
      projectId: todo.projectId,
      dateStarted: todo.dateStarted,
      done: todo.done,
    })
    return response.data
  }

  static async fetchUsers () {
    const response = await axios.get('/users')
    return response.data
  }

  static async fetchUserById (userId) {
    const response = await axios.get(`/users/${userId}`)
    return response.data
  }

  static async fetchTodosByUser (userId) {
    const response = await axios.get('/todos', {
      params: {
        userId,
      },
    })
    return response.data
  }

  static async fetchTodos (params) {
    const response = await axios.get('/todos', { params })
    return response.data
  }
}