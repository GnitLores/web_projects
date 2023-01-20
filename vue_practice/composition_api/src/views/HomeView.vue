<template>
  <div class="home">
    <h3>{{ counterTitle }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input v-model="counterTitle" type="text" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);
const counterTitle = ref('My Counter');

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
.edit {
  margin-top: 4rem;
}
</style>
