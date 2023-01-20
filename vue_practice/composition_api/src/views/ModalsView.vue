<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <modal v-if="showModal">
      <template #title>My new title</template>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui iste
        similique perspiciatis veniam sequi tempora. Facere nesciunt natus
        accusamus soluta, vero nam cupiditate expedita minus, quibusdam sequi,
        obcaecati molestiae. Odit.
      </p></modal
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
</script>

<style scoped></style>
