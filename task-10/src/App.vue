<script setup>
import { ref, computed } from 'vue'
import ChildComp from './components/ChildComp.vue'

const msg = ref('от родителя')
const upperMsg = computed(() => msg.value.toUpperCase())
</script>

<template>
  <div class="page">
    <ChildComp title="Сообщение">
      <template #header>
        <h3>{{ upperMsg }}</h3>
        <label class="input-row">
          <input v-model="msg" class="pink-input" type="text" />
        </label>
      </template>

      <template #main>
        Сообщение: {{ msg }}
      </template>

      <template #footer>
        <p>Футер</p>
      </template>
    </ChildComp>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
}

.input-row {
  display: flex;
  justify-content: center;
}

.pink-input {
  padding: 6px 10px;
  border: 2px solid #ff69b4;
  border-radius: 6px;
  background: #ffe4f1;
  color: #5a004a;
  outline: none;
}
</style>