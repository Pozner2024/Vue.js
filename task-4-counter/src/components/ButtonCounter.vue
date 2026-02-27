<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">
    You clicked me {{ count }} times.
  </button>
</template>

<style scoped>
button {
  background-color: rgb(255, 105, 180);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 16px;
}
</style>