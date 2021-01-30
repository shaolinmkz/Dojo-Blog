<template>
  <h1>Create Post</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="post.title" />
    <label>Body:</label>
    <textarea type="text" v-model="post.body"></textarea>
    <label>Tags (Hit enter to add tag):</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleTagEnter" />
    <div class="pill" v-for="postTag in post.tags" :key="postTag">
      #{{ postTag }}
    </div>
    <button
      type="submit"
      :disabled="[!post.title, !post.body, !post.tags.length].includes(true)"
    >
      Add Post
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const tag = ref("");
    const post = ref({
      title: "",
      body: "",
      tags: [],
    });

    const router = useRouter();

    const handleSubmit = () => {
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post.value),
      })
        .then(() => {
          post.value = {
            title: "",
            body: "",
            tags: [],
          };
          tag.value = "";
          router.push("/");
        })
        .catch((error) => console.log(error.message));
    };

    const handleTagEnter = () => {
      if (
        !post.value.tags.find(
          (val) => val.toLowerCase() === tag.value.trim().toLowerCase()
        ) &&
        tag.value.trim().toLowerCase()
      ) {
        post.value.tags.push(tag.value.trim().replaceAll(" ", ""));
        tag.value = "";
      }
      tag.value = "";
    };

    return { post, handleSubmit, tag, handleTagEnter };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding: 1px 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
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
</style>