<script setup>
import { ref, watch } from 'vue'
import ChildComp from './components/ChildComp.vue'

const userId = ref(1)
const userData = ref(null)

async function fetchUser() {
  userData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId.value}`
  )
  userData.value = await res.json()
}

fetchUser()
watch(userId, fetchUser)
</script>

<template>
  <ChildComp :user="userData" :user-id="userId" />
  <div class="button-wrapper">
    <button class="next-button" @click="userId++" :disabled="!userData">
      Загрузить следующего пользователя
    </button>
  </div>
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

.button-wrapper {
  display: grid;
  place-items: center;
}

.next-button:disabled {
  background-color: #f4b3d3;
  cursor: not-allowed;
}
</style>