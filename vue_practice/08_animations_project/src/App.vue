<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <transition name="fade">
      <h2 v-if="flag">Hello world!</h2>
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
  transition: all 0.25s linear;
}
// Default style is opacity 1, so no need to apply
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>
