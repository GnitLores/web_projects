<template>
  <div class="post-detail">
    <h1>Post details</h1>
    <p>Display conent of the post with ID {{ $route.params.id }}</p>
    <div><button @click="showPostId">Show Post ID</button></div>
    <p><router-link to="/posts">&lt; Back</router-link></p>
    <div>
      <button @click="goHome">Go home</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { vAutofocus } from '@/directives/vAutofocus';

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`The ID is: ${route.params.id}`);
};
const goHome = () => {
  router.push({ name: 'home' });
};
const goToFirstPost = () => {
  router.push({ name: 'postDetail', params: { id: ':id1' } });
};
</script>

<style scoped></style>
