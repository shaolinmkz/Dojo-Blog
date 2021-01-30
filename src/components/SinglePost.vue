<template>
  <div v-if="!loading">
    <div v-for="post in posts" :key="post.id">
      <PostList :post="post" />
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "./PostList.vue";
import Spinner from "./Spinner.vue";

export default {
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const { posts, loading } = getPosts();

    return { posts, loading };
  },
};
</script>

<style>
</style>