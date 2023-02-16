/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 22:47:44
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-02-16 23:45:25
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
      {
        path: '/series',
        name: 'Series',
        component: () => import(/* webpackChunkName: "series" */ '../views/series'),
      },
      {
        path: '/fashion',
        name: 'Fashion',
        component: () => import(/* webpackChunkName: "fashion" */ '../views/fashion'),
      },
      {
        path: '/creator',
        name: 'Creator',
        component: () => import(/* webpackChunkName: "creator" */ '../views/creator'),
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
