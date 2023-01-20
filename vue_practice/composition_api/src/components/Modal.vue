<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ props.title }}</h1>
      <slot></slot>
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>Username is {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'No title specified',
  },
});

const userData = inject('userData');
</script>

<style scoped>
.modal {
  background: beige;
  padding: 1rem;
  color: grey;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
