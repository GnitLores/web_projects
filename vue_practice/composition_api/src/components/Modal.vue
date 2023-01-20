<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1><slot name="title"></slot></h1>
      <slot></slot>
      <button>Hide modal</button>
    </div>
  </teleport>
</template>

<script setup></script>

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
