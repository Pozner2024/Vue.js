<template>
  <div>
    <nav id="nav">
      <AppLink id="logo" to="/">Vue Scholl Travel App</AppLink>
      <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        {{ destination.name }}
      </AppLink>
      <AppLink to="https://vueschool.io">Vue School</AppLink>
    </nav>
  </div>
</template>

<script setup>
import data from "@/data.json";
import AppLink from "@/components/AppLink.vue";

const destinations = data.destinations;
</script>
