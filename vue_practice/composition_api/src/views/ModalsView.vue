<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <teleport to=".modals-container">
      <div class="modal" v-if="showModal">
        <h1>This is a modal</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quo
          debitis dolorum doloribus eius. Pariatur fuga nam, rerum possimus
          natus consequuntur, molestias adipisci, ad voluptas in quae
          consequatur ea? Assumenda?
        </p>
        <button @click="showModal = false">Hide modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showModal = ref(false);
</script>

<style scoped>
.modal {
  background: beige;
  padding: 1rem;
  color: grey;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
