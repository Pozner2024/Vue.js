<script setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
const reset = () => {
  count.value = 0;
};
</script> 
<template>
 <main class="counter">
    <h1>Counter</h1>
    <div class="value">{{ count }}</div>
    <div class="buttons">
      <button @click="decrement">-</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+</button>
    </div>
  </main>
</template>

<style scoped>
.counter {
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
 
}

.value {
  font-size: 48px;
  font-weight: 700;
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
}

button {
  padding: 8px 14px;
  font-size: 16px;
  background: rgb(255, 102, 179);

  &:hover {
    background: rgb(255, 77, 166);
    transform: scale(1.02);
  }
}
</style>
