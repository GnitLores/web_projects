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
        <button @click="$router.back()" class="button is-link is_light mr-3">
          Cancel
        </button>
        <button
          @click.prevent="handleSaveClicked"
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
import { useRoute, useRouter } from 'vue-router';
import { useStoreNotes } from '@/stores/storeNotes';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeNotes = useStoreNotes();
const route = useRoute();
const router = useRouter();

const noteContent = ref('');
console.log(route.params.id);
noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push('/');
};

useWatchCharacters(noteContent);
</script>

<style scoped></style>
