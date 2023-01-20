<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quo
        debitis dolorum doloribus eius. Pariatur fuga nam, rerum possimus natus
        consequuntur, molestias adipisci, ad voluptas in quae consequatur ea?
        Assumenda?
      </p>
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
