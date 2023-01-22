<template>
  <NavBar />
  <!-- <RouterLink to="/" class="button">Notes</RouterLink> |
  <RouterLink to="/stats" class="button">Stats</RouterLink> -->
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import NavBar from '@/components/layout/NavBar.vue';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

onMounted(() => {
  storeNotes.getNotes();
});
</script>

<style scoped></style>
