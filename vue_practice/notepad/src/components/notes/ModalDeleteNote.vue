<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="deleteModalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button
          @click.prevent="closeModal"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click.prevent="closeModal" class="button">Cancel</button>
        <button
          @click.prevent="storeNotes.deleteNote(noteId)"
          class="button is-danger"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
const closeModal = () => {
  emit('update:modelValue', false);
};

const deleteModalRef = ref(null);
onClickOutside(deleteModalRef, closeModal);

const handleKeyboard = (event) => {
  if (event.key === 'Escape') closeModal();
};

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard);
});
</script>

<style scoped></style>
