<template>
  <NavBar />
  <!-- <RouterLink to="/" class="button">Notes</RouterLink> |
  <RouterLink to="/stats" class="button">Stats</RouterLink> -->
  <RouterView />
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
</script>

<style scoped></style>
