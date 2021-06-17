<template>
  <div>
    <todo v-for="(item, index) in $store.getters['inProgressTodos']"
          :key="index"
          :todo="item"
          @delete="() => $store.dispatch('deleteTask', item.id)"
    />
  </div>
</template>

<script>
import Todo from '../components/Todo'

export default {
  components: { Todo },
}
</script>

<style scoped>

</style>
