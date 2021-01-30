<template>
  <div class="home">
    <h1>POSTS</h1>
    <SinglePost />
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost.vue";

export default {
  name: "Posts",
  components: {
    SinglePost,
  },
};
</script>
