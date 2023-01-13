<template>
  <div>
    <button type="button" @click="flag = !flag">Toggle</button>

    <!-- Keys should be used with multiple elements -->
    <!-- out-in mode makes elements animate out before elements animate in -->
    <!-- <transition name="fade" mode="out-in">
      <h2 v-if="flag" key="main">Hello world!</h2>
      <h2 v-else key="secondary">Another hello!</h2>
    </transition> -->

    <!-- appear makes the animation play on page load -->
    <transition name="zoom" type="animation" appear>
      <h2 v-if="flag">Hello</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
// .fade-enter-from {
//   opacity: 0;
// }
// .fade-enter-active {
//   // values: property time function
//   transition: all 0.5s linear;
// }
// // Default style is opacity 1, so no need to apply
// .fade-leave-to {
//   transition: all 0.5s linear;
//   opacity: 0;
// }

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}
.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}
.zoom-enter-from {
  opacity: 0;
}
.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
