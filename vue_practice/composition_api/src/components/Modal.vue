<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ props.title }}</h1>
      <slot></slot>
      <button @click="handleButtonClick">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'No title specified',
  },
});

const emit = defineEmits(['hideModal']);

const handleButtonClick = () => {
  emit('hideModal');
};
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
