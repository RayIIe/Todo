<template>
  <UiCard title="Filter">
    <input v-model="$store.state.filter" class="rounded border border-gray-300"/>
  </UiCard>
</template>

<script>
import UiCard from './UiCard'
export default {
  name: 'TodoFilter',
  components: { UiCard }
}
</script>

<style scoped>
</style>