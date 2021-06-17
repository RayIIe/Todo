<template>
  <div class="bg-white p-5 mb-3 shadow">
    <div class="flex">
      <div class="flex flex-col mr-5">
        <span class="text-sm text-gray-600">Author</span>
        <span class="text-sm font-bold">{{todo.author}}</span>
      </div>
      <div class="flex flex-col">
        <span class="text-sm text-gray-600">Date created</span>
        <span class="text-sm font-bold">{{ format(todo.dateStarted, 'YYYY/MM/DD HH:mm') }}</span>
      </div>
    </div>
    <div class="flex justify-between items-center py-3 border-t border-gray-400 mt-3">
      <div class="flex-0 mr-5">
        <input type="checkbox" v-model="todo.done"/>
      </div>
      <div class="flex-1">
        <span v-if="!isEditing" class="text-xl">
          {{ todo.title }}
        </span>
        <input v-else v-model="todo.title" class="border border-gray-400 p-3">
      </div>
      <div>
        <button @click="onEditClick" class="bg-blue-600 text-white rounded-full w-8 h-8 mr-2 hover:bg-blue-700">
          <i class="fas fa-edit"></i>
        </button>
        <button @click="$emit('delete')" class="bg-red-600 text-white rounded-full w-8 h-8 hover:bg-red-700">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      isEditing: false,
    }
  },
  methods: {
    format (date, format) {
      return moment(date).format(format)
    },
    onEditClick () {
      this.isEditing = !this.isEditing
    },
  },
}
</script>

<style scoped>

</style>
