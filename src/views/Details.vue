<template>
  <div v-if="!loading">
    <div class="post">
      <PostList :post="post" />
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import getPost from "../composables/getPost";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";

export default {
  props: ["id"],
  components: {
    Spinner,
    PostList,
  },
  setup(props) {
    const { post, loading } = getPost(props.id);

    return {
      post,
      loading,
    };
  },
};
</script>

<style>
</style>