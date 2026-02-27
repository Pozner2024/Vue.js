<script setup>
import { ref } from 'vue';
import CustomInput from './components/CustomInput.vue';

const message = ref('hello');
</script>

<template>
  <div class="app">
    <div class="form">
      <p class="label">Введите ваш текст:</p>
      <CustomInput v-model="message" />
      <p class="value">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100dvh;
  display: grid;
  place-items: center;

}

.form {
  display: grid;
  gap: 12px;
  width: min(420px, 100%);
}

.label {
  margin: 0;
  font-size: 16px;
}

.value {
  margin: 0;
  font-size: 14px;
  opacity: 0.7;
}
</style>