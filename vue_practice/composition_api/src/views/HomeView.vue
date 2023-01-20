<template>
  <div class="home">
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

const increaseCounter = () => {
  counterData.count++;
};
const decreaseCounter = () => {
  counterData.count--;
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
