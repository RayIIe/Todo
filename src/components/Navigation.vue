<template>
  <div id="nav">
    <router-link to="/">All</router-link>
    |
    <router-link to="/in-progress">In progress</router-link>
    |
    <router-link to="/done">Done</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
</style>