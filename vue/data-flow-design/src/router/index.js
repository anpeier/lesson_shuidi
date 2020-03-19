import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // redirect: '/home',
    children: [
      {
        path: "home",
        component: Home
      },
      {
        path: "goods",
        name: "Goods",
        component: () => import("@/views/Goods.vue")
      }
    ]
  },
  {
    path: "/goodsDetail",
    name: "GoodsDetail",
    component: () => import("@/views/GoodsDetail.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
