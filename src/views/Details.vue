<template>
  <h1>DETAILS</h1>
  <div v-if="!loading" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
      "
    >
      <span v-for="tag in post.tags" :key="tag">{{ `#${tag}` }}</span>
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";

export default {
  props: ["id"],
  components: {
    Spinner,
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