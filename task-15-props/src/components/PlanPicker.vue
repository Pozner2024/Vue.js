<script setup>
import { ref } from "vue";
import CoffeePlan from "./CoffeePlan.vue";
defineProps({ plans: Array });
const plans = ref(["The Single", "The Curious", "The Addict", "The Hacker"]);
</script>
<template>
  <div class="plans">
    <CoffeePlan v-for="plan in plans" :key="plan" :name="plan" />
  </div>
</template>
