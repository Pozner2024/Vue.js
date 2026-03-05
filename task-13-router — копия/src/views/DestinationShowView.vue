<template>
  <div>
    <section v-if="destination" class="destination">
      <h2>{{ destination.name }}</h2>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <div>
          <p>{{ destination.description }}</p>
        </div>
      </div>
    </section>
    <section v-if="destination" class="experiences">
      <h2>Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <AppLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: {
              id: destination.id,
              slug: destination.slug,
              experienceSlug: experience.slug,
            },
          }"
        >
          <ExperienceCard :experience="experience" />
        </AppLink>
      </div>
    </section>
    <router-view />
  </div>
</template>
<script setup>
import { computed } from "vue";
import data from "../data.json";
import ExperienceCard from "../components/ExperienceCard.vue";
import GoBack from "../components/GoBack.vue";
import AppLink from "@/components/AppLink.vue";
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const destination = computed(() =>
  data.destinations.find((item) => item.slug === props.slug),
);
</script>
