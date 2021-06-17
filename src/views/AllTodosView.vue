<template>
  <div>
    <div class="bg-white shadow mb-5 p-5 rounded flex flex-col">
      <h1 class="text-xl">Create new task</h1>
      <div class="flex flex-col">
        <span>Title</span>
        <input class="border border-gray-300 py-1 px-3" v-model="form.title" />
        <span>Author</span>
        <input class="border border-gray-300 py-1 px-3" v-model="form.author" />
      </div>
      <div>
        <button :disabled="isDisabled"
                @click="createTask" class="rounded py-2 px-5 mt-5 w-full"
                :class="{
                  'bg-gray-200 text-gray-800 cursor-not-allowed': isDisabled,
                  'bg-blue-600 text-white focus:bg-blue-700': !isDisabled,
                }"
        >Add</button>
      </div>
    </div>
    <todo v-for="(item, index) in $store.getters['todos']"
          :key="index"
          :todo="item"
          @delete="() => $store.dispatch('deleteTask', item.id)"
    />
  </div>
</template>

<script>
import Todo from '../components/Todo'

export default {
  name: 'AllTodosView',
  components: { Todo },
  data () {
    return {
      form: {
        title: '',
        author: '',
      },
      error: ''
    }
  },
  computed: {
    isDisabled () {
      return !this.form.title || !this.form.author
    },
  },
  methods: {
    createTask () {
      if (!this.form.title) {
        this.error = 'Title is required'
        return
      }
      if (!this.form.author) {
        this.error = 'Author is required'
        return
      }
      this.$store.dispatch('createTask', {
        id: new Date().getTime(),
        title: this.form.title,
        author: this.form.author,
        dateStarted: new Date().toISOString(),
        done: false,
      })
    },
  },
}
</script>

<style scoped>

</style>
