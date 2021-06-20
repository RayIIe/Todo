<template>
  <div>
    <router-link to="/" class="bg-blue-600 text-white py-2 px-4 rounded shadow my-3 inline-block">Go back</router-link>
    <UiCard v-if="user" :flat="true" :title="`${user.firstName} ${user.lastName}`">
      <todo v-for="(item, index) in todos"
            :key="index"
            :todo="item"/>
    </UiCard>
  </div>
</template>

<script>
import Todo from '../components/Todo'
import UiCard from '../components/UiCard'
export default {
  name: 'UserDetails',
  components: { UiCard, Todo },
  data () {
    return {
      user: null,
      todos: [],
    }
  },
  async mounted () {
    this.user = await this.$api.fetchUserById(this.$route.params.id)
    this.todos = await this.$api.fetchTodosByUser(this.$route.params.id)
  },
}
</script>

<style scoped>
</style>