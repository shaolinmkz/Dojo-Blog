import { createRouter, createWebHistory } from "vue-router";
import Posts from "../views/Posts.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";
import Tag from "../views/Tag.vue";

const routes = [
	{
		path: "/",
		redirect: "/posts",
	},
	{
		path: "/posts",
		name: "Posts",
		component: Posts,
	},
	{
		path: "/posts/:id",
		name: "Details",
		component: Details,
		props: true,
	},
	{
		path: "/create",
		name: "Create",
		component: Create,
	},
	{
		path: "/tags/:tag",
		name: "Tag",
		component: Tag,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
