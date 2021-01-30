import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
