<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
export default {
  // Lifecycle hooks:
  unmounted() {
    // Will NOT get called if keep-alive element is used
    console.log('Home component unmounted');
  },
  activated() {
    // WILL get called if keep-alive element is used
    console.log('Home component activated');
  },
  deactivated() {
    // WILL get called if keep-alive element is used
    console.log('Home component deactivated');
  },
};
</script>
