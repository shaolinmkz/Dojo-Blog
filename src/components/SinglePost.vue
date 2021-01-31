<template>
  <div v-if="!loading" class="post_section">
    <div class="post" v-for="post in posts" :key="post.id">
      <PostList :post="post" />
    </div>
  </div>
  <Spinner v-else />
  <TagCloud v-if="!loading" :posts="posts" />
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "./PostList.vue";
import Spinner from "./Spinner.vue";
import TagCloud from "./TagCloud.vue";

export default {
  components: {
    PostList,
    Spinner,
    TagCloud
  },
  setup() {
    const { posts, loading } = getPosts();

    return { posts, loading };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.post_section {
  width: 100%;
  overflow: auto;
  height: 70vh;
}

.post_section::-webkit-scrollbar {
  opacity: 0;
}
</style>