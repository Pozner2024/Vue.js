<script setup>
const props = defineProps({
  user: Object,
  userId: Number
})
</script>

<template>
  <div class="user-card-wrapper">
    <div class="user-card">
      <p>Пользователь #{{ userId }}</p>
      <p v-if="!user">Загрузка данных...</p>
      <div v-else>
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <p>{{ user.company?.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-card-wrapper {
  display: grid;
  place-items: center;
  margin-bottom: 12px;
}

.user-card {
  border: 1px solid #f4b3d3;
  border-radius: 8px;
  padding: 12px;
  width: 250px;
}
</style>