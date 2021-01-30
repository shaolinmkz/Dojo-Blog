<template>
<router-link :to="`/posts/${post.id}`">
  <h3>{{ post.title }}</h3>
</router-link>
  <p>{{ `${post.body.slice(0, 100)}...` }}</p>
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
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
</style>