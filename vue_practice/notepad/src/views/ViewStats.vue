<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Total Number of Characters</td>
          <td>{{ storeNotes.totalCharCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="notepadOpinion"
      type="text"
      class="input"
      placeholder="What do you think about Notepad?"
      v-autofocus
      maxlength="50"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeNotes = useStoreNotes();

const notepadOpinion = ref('');
useWatchCharacters(notepadOpinion, 50);
</script>

<style scoped></style>
