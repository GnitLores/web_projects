<template>
  <div class="post">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/postDetail/${post.id}`">
          {{ post.title }}</router-link
        >
      </li>
    </ul>

    <textarea v-autofocus></textarea>

    <div>
      <button
        class="counter-button"
        @click="increaseCounter(1, $event)"
        :class="{ yellow: oddOrEven === 'even' }"
      >
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounter } from '@/use/useCounter';
import { vAutofocus } from '@/directives/vAutofocus';

const { counterData, oddOrEven, increaseCounter, decreaseCounter } =
  useCounter();

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1',
  },
  {
    id: 'id2',
    title: 'Post 2',
  },
  {
    id: 'id3',
    title: 'Post 3',
  },
]);
</script>

<style scoped>
ul {
  margin-bottom: 2rem;
}
.counter-button {
  font-size: 4rem;
  width: 100%;
  background-color: pink;
}
.counter-button.yellow {
  background-color: yellow;
}
</style>
