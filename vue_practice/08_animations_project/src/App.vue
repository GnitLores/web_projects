<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <!-- Keys should be used with multiple elements -->
    <!-- out-in mode makes elements animate out before elements animate in -->
    <transition name="fade" mode="out-in">
      <h2 v-if="flag" key="main">Hello world!</h2>
      <h2 v-else key="secondary">Another hello!</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  // values: property time function
  transition: all 0.5s linear;
}
// Default style is opacity 1, so no need to apply
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
