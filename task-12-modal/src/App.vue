<script setup>
import { ref } from "vue";
import Modal from "./components/Modal.vue";

const showModal = ref(false);
</script>

<template>
  <button id="show-modal" class="primary-button" @click="showModal = true">
    Показать модальное окно
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Пользовательский заголовок</h3>
      </template>
    </Modal>
  </Teleport>
</template>

<style>
.primary-button {
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  color: #ffffff;
  background: #ff4da6;
  cursor: pointer;
  font: inherit;
}

.primary-button:hover {
  background: #ff2f97;
}

.primary-button:active {
  background: #e1007f;
}
</style>
