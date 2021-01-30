<template>
  <div class="posts-view">
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
