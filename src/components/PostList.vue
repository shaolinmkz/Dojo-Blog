<template>
  <router-link :to="`/posts/${post.id}`">
    <h3>{{ post.title }}</h3>
  </router-link>
  <p>{{ `${post.body.slice(0, 100)}...` }}</p>
  <div
    style="
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    "
  >
    <router-link
      class="pill"
      :class="{ 'active': tag === params?.tag }"
      v-for="tag in post.tags"
      :key="tag"
      :to="`/tags/${tag}`"
      ><span>{{ `#${tag}` }}</span></router-link
    >
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  props: ["post"],
  setup() {
    const { params } = useRoute();

    return {
      params
    }
  }
};
</script>

<style>
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

a.active {
  color: #ff8800;
  background: #ffefdd;
  font-weight: bold;
}
</style>