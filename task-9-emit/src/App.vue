<script setup>
import { ref } from 'vue'
import ChildComp from './components/ChildCom.vue'

const history = ref([])

const onResponse = (payload) => {
  const entry = `${payload.from}: ${payload.text} (${payload.at})`
  history.value.unshift(entry)
}
</script>

<template>
  <main class="page">
    <div class="card">
      <ChildComp @response="onResponse" />
      <ul class="history">
        <li v-for="item in history" :key="item">{{ item }}</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(255, 247, 251, 1);
  padding: 24px;
}

.card {
  display: grid;
  gap: 16px;
  width: min(520px, 100%);
  border: 1px solid rgba(247, 193, 217, 1);
  border-radius: 16px;
  padding: 24px;
 
}

.history {
  margin: 0;
  padding-left: 18px;
  color: rgba(122, 31, 77, 1);
}
</style>