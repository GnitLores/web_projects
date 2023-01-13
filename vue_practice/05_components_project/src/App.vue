<template>
  <h3>Hey!</h3>
  <greeting></greeting>
  <user :age="age"></user>
</template>

<script>
// Local component registration
import Greeting from '@/components/Greeting.vue';
import User from '@/components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
};
</script>
