<template>
  <div>
    <nav id="nav">
      <router-link id="logo" to="/">Vue Scholl Travel App</router-link>
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        {{ destination.name }}
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import data from "@/data.json";

const destinations = data.destinations;
</script>
