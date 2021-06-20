<template>
  <UiCard title="Create new task">
    <div class="flex flex-col">
      <span>Title</span>
      <input class="border border-gray-300 py-1 px-3" v-model="form.title"/>
      <span>Author</span>
      <select class="border border-gray-300 py-1 px-3" v-model="form.userId">
        <option v-for="(user, index) in users" :key="index" :value="user.id">
          {{ user.firstName }} {{ user.lastName }}
        </option>
      </select>
    </div>
    <div>
      <button :disabled="isDisabled"
              @click="createTask" class="rounded py-2 px-5 mt-5 w-full"
              :class="{
                  'bg-gray-200 text-gray-800 cursor-not-allowed': isDisabled,
                  'bg-blue-600 text-white focus:bg-blue-700': !isDisabled,
                }"
      >Add
      </button>
    </div>
  </UiCard>
</template>

<script>
import UiCard from './UiCard'
export default {
  name: 'AddNewTodo',
  components: { UiCard },
  data () {
    return {
      form: {
        title: '',
        author: '',
      },
      error: '',
      users: [],
    }
  },
  async mounted () {
    this.users = await this.$api.fetchUsers()
  },
  computed: {
    isDisabled () {
      return !this.form.title || !this.form.userId
    },
  },
  methods: {
    createTask () {
      if (!this.form.title) {
        this.error = 'Title is required'
        return
      }
      if (!this.form.userId) {
        this.error = 'Author is required'
        return
      }
      this.$store.dispatch('createTask', {
        id: new Date().getTime(),
        title: this.form.title,
        userId: this.form.userId,
        dateStarted: new Date().toISOString(),
        done: false,
      })
      this.$emit('added')
    },
  },
}
</script>

<style scoped>
</style>