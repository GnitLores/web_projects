<template>
  <p>Hey!</p>
  <greeting></greeting>
</template>

<script>
// Local component registration
import Greeting from '@/components/Greeting.vue';

export default {
  name: 'App',
  components: {
    Greeting,
  },
};
</script>
