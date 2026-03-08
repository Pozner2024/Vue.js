<script setup>
import { ref, onUnmounted, onMounted } from "vue";
import CoffeePlan from "./CoffePlan.vue";
defineProps({ plans: Array });
const plans = ref(["The Single", "The Curious", "The Addict", "The Hacker"]);
const selectedCoffeePlan = ref();
function handleSelectCoffeePlan(name) {
  selectedCoffeePlan.value = name;
}
const plansWrapper = ref();
</script>
<template>
  <div ref="plansWrapper" class="plans">
    {{ selectedCoffeePlan }}
    <CoffeePlan
      v-for="plan in plans"
      :key="plan"
      :name="plan"
      :selected="plan === selectedCoffeePlan"
      @selected="handleSelectCoffeePlan($event)"
    />
  </div>
</template>
