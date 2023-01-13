<template>
  <div>
    <!-- Data can be passed from child to parent using both events and callback functions, but events are usually preferred. -->
    <button type="button" @click="onClickAge">Update Age Event</button>
    <button type="button" @click="ageChangeFn(3)">Update Age Callback</button>
    <p>The user is {{ age }} years old.</p>
    <p>{{ ageDoubled }}</p>
  </div>
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
        return value < 130;
      },
    },
    ageChangeFn: Function,
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
