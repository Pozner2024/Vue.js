<script setup>
import { ref } from 'vue'

const emit = defineEmits(['response'])

const name = ref('')
const message = ref('')

const send = () => {
  const trimmedName = name.value.trim() || 'Аноним'
  const trimmedMessage = message.value.trim()

  if (!trimmedMessage) {
    return
  }

  emit('response', {
    text: trimmedMessage,
    from: trimmedName,
    at: new Date().toLocaleTimeString(),
  })

  message.value = ''
}
</script>

<template>
  <section class="form">
    <h2 class="title">Дочерний компонент</h2>
    <label class="field">
      Имя
      <input
        v-model="name"
        class="control"
        type="text"
        placeholder="Кто пишет?"
      />
    </label>
    <label class="field">
      Сообщение
      <input
        v-model="message"
        class="control"
        type="text"
        placeholder="Введите сообщение"
        @keydown.enter="send"
      />
    </label>
    <button class="btn" type="button" @click="send">Отправить</button>
  </section>
</template>

<style scoped>
.form {
  display: grid;
  gap: 12px;
}

.title {
  margin: 0;
  color: rgba(122, 31, 77, 1);
}

.field {
  display: grid;
  gap: 6px;
  color: rgba(122, 31, 77, 1);
  font-weight: 600;
}

.control {
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(247, 193, 217, 1);
  background: rgba(255, 240, 247, 1);
  color: rgba(122, 31, 77, 1);
  outline: none;
}

.control:focus {
  border-color: rgba(255, 118, 182, 1);
  box-shadow: 0 0 0 3px rgba(255, 118, 182, 0.2);
}

.btn {
  justify-self: start;
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid rgba(255, 118, 182, 1);
  background: rgba(255, 118, 182, 1);
  color: rgba(255, 255, 255, 1);
  
  transition: transform 0.1s ease, box-shadow 0.2s ease;
}

.btn:active {
  transform: translateY(1px);
}
</style>