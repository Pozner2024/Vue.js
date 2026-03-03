<template>
  <GoBack />
  <div v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import GoBack from "../components/GoBack.vue";
import data from "../data.json";

const props = defineProps({
  experienceSlug: {
    type: String,
    required: true,
  },
});

const experience = computed(() => {
  return data.destinations
    .flatMap((destination) => destination.experiences)
    .find((item) => item.slug === props.experienceSlug);
});
</script>
