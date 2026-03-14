<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li class="card">
    <img :src="product.image" :alt="product.name" />
    <h2>{{ product.name }}</h2>
    <p class="price">${{ product.price }}</p>
  </li>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  background: #f0f0f0;
}

.card h2 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  text-align: center;
}

.price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #38a169;
  margin: 0;
}
</style>
