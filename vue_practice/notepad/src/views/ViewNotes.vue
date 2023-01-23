<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      label="Create Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click.prevent="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100"
    ></progress>

    <template v-else>
      <note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </template>

    <div
      v-if="!storeNotes.notes.length"
      class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
    >
      No notes here yet...
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import Note from '@/components/notes/Note.vue';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeNotes = useStoreNotes();

const newNote = ref('');
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value.focusTextArea();
};

useWatchCharacters(newNote);
</script>

<style scoped></style>
