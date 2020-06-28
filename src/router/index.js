import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    //children代表子组件是在home里的路由
    children:[
      {
        path: 'list',
        name: 'list',
        //用懒加载模式 格式得规范
        component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    //用懒加载模式 格式得规范
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
});

export default router;
