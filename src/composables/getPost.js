import { ref } from "vue";

const getPost = (id) => {
	const post = ref(null);
	const loading = ref(true);

	fetch(`http://localhost:3000/posts/${id}`)
		.then((res) => res.json())
		.then((data) => (post.value = data))
		.catch((error) => console.log(error.message))
		.finally((_) => {
			setTimeout(() => {
				loading.value = false;
			}, 2000);
		});

	return { post, loading };
};

export default getPost;
