<template>
  <div>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You must be 25 years or older to view this message.</p>
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Hello World',
    };
  },
};
</script>

<!-- The scoped attribute limits the style to this component only -->
<style lang="scss" scoped>
p:hover {
  color: darken(#cc4444, 15%);
}
</style>
