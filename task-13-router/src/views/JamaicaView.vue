<template>
  <main class="container">
    <section v-if="destination" class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <div>
        <h1>{{ destination.name }}</h1>
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <section v-if="destination" class="experiences">
      <h2>Experiences</h2>
      <div class="cards">
        <article
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <img :src="`/images/${experience.image}`" :alt="experience.name" />
          <span class="card__text">{{ experience.name }}</span>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import data from "../data.json";

const destination = data.destinations.find((item) => item.slug === "jamaica");
</script>
