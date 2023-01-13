<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      msg: 'Hello World',
    };
  },
};
</script>

<!-- The scoped attribute limits the style to this component only -->
<style scoped>
p {
  color: red;
}
</style>
