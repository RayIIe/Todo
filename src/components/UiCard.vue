<template>
  <div class="mb-5 p-5 rounded flex flex-col"
       :class="{
        'bg-white shadow': !flat,
       }"
  >
    <h1 v-if="title" class="text-xl font-bold mb-5">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiCard',
  props: ['title', 'flat'],
}
</script>

<style scoped>
</style>