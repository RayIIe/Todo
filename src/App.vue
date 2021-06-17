<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <div class="mx-auto max-w-xl">
      <div id="nav">
        <router-link to="/">All</router-link>
        |
        <router-link to="/in-progress">In progress</router-link>
        |
        <router-link to="/done">Done</router-link>
      </div>
      <div class="bg-white rounded shadow p-5 mb-5">
        <div class="text-lg">Filter</div>
        <input v-model="$store.state.filter" class="rounded border border-gray-300" />
      </div>
      <router-view/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async mounted () {
    const response = await axios.get('/todos')
    this.$store.commit('SET_TODOS', response.data)
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
