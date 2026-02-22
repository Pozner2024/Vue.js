<script setup>
import ButtonCounter from './components/ButtonCounter.vue'
</script>

<template>
  <div class="page">
    <h1>Here are many child components!</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
     <ButtonCounter />
  </div>
</template>

<style scoped>
.page {
  min-height: 100dvh;
  display: grid;
  place-items: center;
}
</style>