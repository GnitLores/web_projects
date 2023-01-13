<template>
  <p>The user is {{ age }} years old.</p>
</template>

<script>
export default {
  name: 'user',
  props: ['age'],
};
</script>

<style lang="scss" scoped></style>
