import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/posts/:id",
    name: "PostView",
    props: true,
    component: () => import('@/views/PostView')
  },
  {
    path: "/create/post",
    name: "PostForm",
    component: () => import('@/views/PostForm')
  },
];

const router = new VueRouter({
  routes
});

export default router;
