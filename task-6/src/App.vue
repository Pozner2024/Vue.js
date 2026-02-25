<script setup>
import { ref } from 'vue';

const step = ref(0);
const maxStep = 5;

function moveBox() {
  step.value = (step.value + 1) % (maxStep + 1);
}
</script>

<template>
  <div class="container">
    <div class="box" :class="`step-${step}`"></div>
    <button class="move-button" @click="moveBox">Двигать квадрат</button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  min-height: 110px;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: rgb(255, 102, 179);
}

.box.step-0 {
  transform: translateX(0);
}

.box.step-1 {
  transform: translateX(100px);
}

.box.step-2 {
  transform: translateX(200px);
}

.box.step-3 {
  transform: translateX(300px);
}

.box.step-4 {
  transform: translateX(400px);
}

.box.step-5 {
  transform: translateX(500px);
}

.move-button {
  margin-top: 70px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: rgb(255, 102, 179);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.move-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}


</style>