<template>
  <div>
    <Navigation />
    <TodoFilter />
    <div class="flex w-full">
      <div class="flex-1 mr-3">
        <slot></slot>
      </div>
      <div class="w-full max-w-sm">
        <AddNewTodo @added="$emit('added')"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import TodoFilter from './TodoFilter'
import AddNewTodo from './AddNewTodo'
export default {
  name: 'BaseLayout',
  components: { AddNewTodo, TodoFilter, Navigation }
}
</script>

<style scoped>
</style>