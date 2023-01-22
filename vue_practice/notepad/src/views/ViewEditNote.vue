<template>
  <div>
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is_light">
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '@/components/notes/AddEditNote.vue';

const storeNotes = useStoreNotes();
const route = useRoute();

const noteContent = ref('');
console.log(route.params.id);
noteContent.value = storeNotes.getNoteContent(route.params.id);
</script>

<style scoped></style>
