import { ref } from "vue";

const getPosts = () => {
	const posts = ref([]);
  const loading = ref(true);
  
	fetch("http://localhost:3000/posts")
		.then((res) => res.json())
		.then((data) => (posts.value = data))
		.catch((error) => console.log(error.message))
		.finally(() => {
			setTimeout(() => {
				loading.value = false;
			}, 1000);
		});

	return { posts, loading };
};

export default getPosts;
