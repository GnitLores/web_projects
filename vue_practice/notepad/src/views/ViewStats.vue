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
      type="text"
      class="input"
      placeholder="What do you think about Notepad?"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';

const storeNotes = useStoreNotes();
</script>

<style scoped></style>
