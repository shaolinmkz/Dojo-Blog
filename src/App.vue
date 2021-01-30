<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.posts-view {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

button:hover,
a:hover {
  cursor: pointer;
}

button:disabled:hover {
  opacity: 1;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
