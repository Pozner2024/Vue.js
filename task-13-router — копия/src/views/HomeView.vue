<template>
  <main class="home container">
    <h1>Destinations</h1>
    <div class="destinations">
      <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <h2>{{ destination.name }}</h2>
      </AppLink>
    </div>
  </main>
</template>

<script setup>
import data from "../data.json";
import AppLink from "@/components/AppLink.vue";

const destinations = data.destinations;
</script>
