<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">стандартный заголовок</slot>
        </div>

        <div class="modal-body">
          <slot name="body">тело по умолчанию</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            нижний колонтитул по умолчанию
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  text-align: center;
  margin-top: 12px;
}

.modal-default-button {
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: #ffffff;
  background: #ff4da6;
  cursor: pointer;
  font: inherit;
}

.modal-default-button:hover {
  background: #ff2f97;
}

.modal-default-button:active {
  background: #e1007f;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
