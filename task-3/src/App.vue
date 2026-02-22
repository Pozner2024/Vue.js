<script setup>
import AlertBox from './components/AlertBox.vue'
</script>

<template>
  <div class="page">
    <AlertBox>
      Something bad happened.
    </AlertBox>
  </div>
</template>

<style scoped>
.page {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px;
}
</style>
