<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            ref="newNoteRef"
            class="textarea"
            placeholder="Add a new note"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click.prevent="addNote"
            class="button is-link has-background-success"
            :disabled="!newNote"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <note v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime, vero deleniti voluptatem molestias ad! Architecto illum amet magnam, illo sed aspernatur porro enim nam adipisci, ea sint cumque non.',
  },
  {
    id: 'id2',
    content: 'Shorter note',
  },
]);

const addNote = () => {
  // use unique id generator in real project
  let note = {
    id: Math.floor(Math.random() * Date.now()).toString(),
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = '';
  newNoteRef.value.focus();
};
</script>

<style scoped></style>
