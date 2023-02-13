/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 22:47:44
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-13 17:31:20
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "index" */ '../views/index'),
      },
    ],
  },
];

const router = createRouter({
  //hash模式
  history: createWebHashHistory(),
  routes,
});

export default router;
