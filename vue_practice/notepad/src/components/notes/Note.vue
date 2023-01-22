<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column has-text-left">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import ModalDeleteNote from '@/components/notes/ModalDeleteNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useDateFormat } from '@vueuse/core';

const storeNotes = useStoreNotes();

const props = defineProps({
  note: Object,
  required: true,
});

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  return useDateFormat(date, 'YYYY-MM-DD HH:mm:ss');
});

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? 'characters' : 'character';
  return `${length}  ${description}`;
});

const modals = reactive({
  deleteNote: false,
  editNote: false,
});
</script>

<style scoped></style>
