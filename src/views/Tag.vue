<template>
<div class="posts-view">
  <div v-if="!loading">
    <div class="post" v-for="post in computedPosts" :key="post.id">
      <PostList :post="post" />
    </div>
  </div>
  <Spinner v-else />
  <TagCloud v-if="!loading" :posts="computedPosts" />
</div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts";

export default {
  components: {
    Spinner,
    PostList,
    TagCloud,
  },
  setup() {
    const route = useRoute();
    const { posts, loading } = getPosts();
    const computedPosts = computed(() => {
      return posts.value.filter(
        ({ tags }) =>
          !!tags.find(
            (val) => val.toLowerCase() === route.params.tag.toLowerCase()
          )
      );
    });

    return { computedPosts, loading };
  },
};
</script>

<style>
</style>