<template>
  <main class="home container">
    <h1>Destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="`/${destination.slug}`"
      >
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <h2>{{ destination.name }}</h2>
      </router-link>
    </div>
  </main>
</template>

<script setup>
import data from "../data.json";

const destinations = data.destinations;
</script>
