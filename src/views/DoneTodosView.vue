<template>
    <TodoListView :is-done="true"/>
</template>

<script>
import TodoListView from './TodoListView'

export default {
 components: { TodoListView },
}
</script>

<style scoped>

</style>
