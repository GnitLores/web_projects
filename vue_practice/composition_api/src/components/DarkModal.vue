<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ props.title }}</h1>
      <slot></slot>
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
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
</script>

<style scoped>
.modal-dark {
  background: #333;
  padding: 1rem;
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
