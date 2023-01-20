<template>
  <div class="home">
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};
const decreaseCounter = () => {
  counter.value--;
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 1rem;
}
.btn,
.counter {
  font-size: 2rem;
  margin: 1rem;
  width: 3rem;
  height: 3rem;
}
</style>
