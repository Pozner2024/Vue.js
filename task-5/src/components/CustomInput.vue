<script setup>
const props = defineProps({
  modelValue: String, 
});

const emit = defineEmits(['update:modelValue']); 

const updateValue = (event) => {
  emit('update:modelValue', event.target.value); 
};
</script>

<template>
  <input
    :value="props.modelValue"  
    @input="updateValue"        
    class="custom-input"
  />
</template>

<style scoped>
.custom-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(214, 214, 214, 1);
  border-radius: 8px;
  font-size: 16px;
  outline: none;
}

.custom-input:focus {
  border-color: rgba(255, 79, 163, 1);
  box-shadow: 0 0 0 3px rgba(255, 79, 163, 0.2);
}
</style>