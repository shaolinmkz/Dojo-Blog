<template>
  <div class="container">
    <h3>Tags</h3>
    <router-link
      class="pill"
      :class="{ 'active': tag === params?.tag }"
      v-for="tag in computedTags"
      :key="tag"
      @click="window?.location?.reload()"
      :to="{ name: 'Tag', params: { tag } }"
      ><span>{{ `#${tag}` }}</span></router-link
    >
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  props: ["posts"],
  setup(props) {
    const { posts } = props;
    const { params } = useRoute();

    const computedTags = computed(() => {
      const tags = [];
      posts.forEach((post) => {
        post.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
      });
      return tags;
    });
    
    return { computedTags, params };
  },
};
</script>

<style scoped>
.container {
  width: 300px;
  height: 60vh;
  padding: 50px 20px;
  border-left: 1px solid rgb(233, 233, 233);
}

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