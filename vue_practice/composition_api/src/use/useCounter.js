import { reactive, computed, watch, nextTick } from 'vue';

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

export function useCounter() {
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
    nextTick(() => {
      console.log('Do something on update');
    });
  };
  const decreaseCounter = (amount, event) => {
    counterData.count -= amount;
  };

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
