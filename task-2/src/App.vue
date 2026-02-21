<template>
  <div class="app">
    <h1>Shopping list</h1>

    <div class="controls">
      <input
        v-model="newItem"
        type="text"
        placeholder="What to buy?"
        @keyup.enter="addItem"
      />
      <button type="button" @click="addItem">Add</button>
    </div>

    <ul class="list">
      <li v-for="item in items" :key="item.id" class="list-item">
        <span>{{ item.text }}</span>
        <button type="button" @click="removeItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newItem = ref("");
const items = ref([]);

const addItem = () => {
  const text = newItem.value.trim();
  if (!text) return;

  items.value.push({
    id: Date.now(),
    text,
  });

  newItem.value = "";
};

const removeItem = (id) => {
  items.value = items.value.filter((item) => item.id !== id);
};
</script>

<style scoped>
.app {
  max-width: 520px;
  margin: 32px auto;
  padding: 0 16px;
  color: rgb(255, 77, 166);
}

.controls {
  display: flex;
  gap: 8px;
  margin: 16px 0;
}

.controls input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
}

.controls input:focus {
  outline: none;
  border-color: rgb(255, 77, 166);

}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

button {
  padding: 8px 14px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  background: rgb(255, 102, 179);
  color: #fff;
}

button:hover {
  background: rgb(255, 77, 166);
}
</style>
