<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <p>Id задачи: {{ todoId }}</p>
  <button class="next-button" @click="todoId++" :disabled="!todoData">
    Получение следующего задания
  </button>
  <p v-if="!todoData">Загрузка...</p>
  <pre v-else>{{ todoData }}</pre>
</template>

<style scoped>
.next-button {
  background-color: #ff7db6;
  color: #ffffff;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.next-button:disabled {
  background-color: #f4b3d3;
  cursor: not-allowed;
}
</style>