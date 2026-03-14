<script setup>
import { useProductStore } from "./stores/ProductStore";
import TheHeader from "./components/TheHeader.vue";
import ProductCard from "./components/ProductCard.vue";

const productStore = useProductStore();
productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />

    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
      />
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
