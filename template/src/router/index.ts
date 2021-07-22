import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout'

// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'el-icon-s-home',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
        meta: {
          title: '首页',
          icon: 'home',
        },
      },
    ],
  },
]

// 动态的异步路由
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/workplace',
    meta: {
      title: 'Dashboard',
      icon: 'el-icon-data-analysis',
    },
    children: [
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/Dashboard/Workplace'
          ),
        meta: {
          title: '工作台',
          icon: 'home',
        },
      },
    ],
  },
]

const router = createRouter({
  routes: constantRoutes,
  history: createWebHistory(),
})

export default router
