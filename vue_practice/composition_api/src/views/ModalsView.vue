<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark Modals <input v-model="showDarkModals" type="checkbox"
      /></label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showDarkModals ? DarkModal : Modal"
      title="My modal title (vie prop)"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui iste
        similique perspiciatis veniam sequi tempora. Facere nesciunt natus
        accusamus soluta, vero nam cupiditate expedita minus, quibusdam sequi,
        obcaecati molestiae. Odit.
      </p></component
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import DarkModal from '@/components/DarkModal.vue';

const showDarkModals = ref(false);
const showModal = ref(false);
</script>

<style scoped></style>
