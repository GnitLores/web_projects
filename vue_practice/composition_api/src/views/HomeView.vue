<template>
  <div class="home">
    <h3 ref="appTitleRef">{{ counterData.title }}:</h3>
    <div>
      <button class="btn" @click="decreaseCounter(5, $event)">--</button>
      <button class="btn" @click="decreaseCounter(1, $event)">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(1, $event)">+</button>
      <button class="btn" @click="increaseCounter(5, $event)">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounter } from '@/use/useCounter';
import { vAutofocus } from '@/directives/vAutofocus';

const appTitleRef = ref(null);

const { counterData, oddOrEven, increaseCounter, decreaseCounter } =
  useCounter();
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
