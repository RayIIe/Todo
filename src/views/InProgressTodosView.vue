<template>
  <TodoListView :is-done="false"/>
</template>

<script>
import TodoListView from './TodoListView'

export default {
 components: { TodoListView },
}
</script>

<style scoped>

</style>
