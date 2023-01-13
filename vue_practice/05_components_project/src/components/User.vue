<template>
  <button type="button" @click="onClickAge">Update Age</button>
  <p>The user is {{ age }} years old.</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'user',
  props: {
    age: {
      type: Number,
      //   required: true,
      //   default: 20,
      validator(value) {
        // Validator is run before creation so no access to methods etc.
        return value < 40;
      },
    },
  },
  emits: ['age-change'], // not necessary but good practice to list emitted events
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit('age-change', 3);
    },
  },
};
</script>

<style lang="scss" scoped></style>
