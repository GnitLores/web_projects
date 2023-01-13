<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>

<script>
export default {
  // Lifecycle hooks:
  unmounted() {
    // Will NOT get called if keep-alive element is used
    console.log('About component unmounted');
  },
  activated() {
    // WILL get called if keep-alive element is used
    console.log('About component activated');
  },
  deactivated() {
    // WILL get called if keep-alive element is used
    console.log('About component deactivated');
  },
};
</script>
