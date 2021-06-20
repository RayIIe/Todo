<template>
  <BaseLayout @added="fetchTodos">
    <todo v-for="item in filteredTodos"
          :key="item.id"
          :todo="item"
          :on-delete="() => onDelete(item.id)"
    />
  </BaseLayout>
</template>

<script>
import Todo from '../components/Todo'
import BaseLayout from '../components/BaseLayout'
export default {
  name: 'TodoListView',
  components: { BaseLayout, Todo },
  props: ['isDone'],
  data () {
    return {
      todos: [],
    }
  },
  computed: {
    filteredTodos () {
      return this.todos.filter(todo => {
        return todo.title.toLowerCase().includes(this.$store.state.filter.toLowerCase())
            || todo._author && `${todo._author.firstName} ${todo._author.lastName}`.toLowerCase().includes(this.$store.state.filter.toLowerCase())
      })
    },
  },
  mounted () {
    this.fetchTodos()
  },
  methods: {
    async fetchTodos () {
      this.todos = await this.$api.fetchTodos({ done: this.isDone })
    },
    async onDelete (id) {
      await this.$store.dispatch('deleteTask', id)
      this.fetchTodos()
    },
  },
}
</script>

<style scoped>
</style>