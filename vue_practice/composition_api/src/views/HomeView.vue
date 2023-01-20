<template>
  <div class="home">
    <h3>{{ counterData.title }}:</h3>
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
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
import {
  reactive,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
} from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

watch(
  () => counterData.count,
  (newVal, oldVal) => {
    console.log('Change by:', newVal - oldVal);
  }
);

const oddOrEven = computed(() => {
  return counterData.count % 2 === 0 ? 'even' : 'odd';
});

const increaseCounter = (amount, event) => {
  counterData.count += amount;
};
const decreaseCounter = (amount, event) => {
  counterData.count -= amount;
};

onBeforeMount(() => {
  console.log('Before Mount');
});
onMounted(() => {
  console.log('Mounted');
});
onBeforeUnmount(() => {
  console.log('Before Unmount');
});
onUnmounted(() => {
  console.log('Unmounted');
});
onActivated(() => {
  console.log('Activated');
});
onDeactivated(() => {
  console.log('Deactivated');
});
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
