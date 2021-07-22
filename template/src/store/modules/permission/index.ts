import { Module } from 'vuex'
import PermissionStateTypes from './types'
import RootStateTypes from '../../types'
import router, { constantRoutes, asyncRoutes } from '@/router'
// import { RouteRecordRaw } from 'vue-router'

const permissionModule: Module<PermissionStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    roles: [], // 用户权限集合
    routes: constantRoutes, // 可访问的路由集合
  },
  mutations: {
    setRoles(state: PermissionStateTypes, roles) {
      state.roles = roles
    },
    setRoutes(state: PermissionStateTypes, routes) {
      // 静态路由 + 异步中有权限的路由
      state.routes = constantRoutes.concat(routes)
      console.log('router.options.routes', router.options.routes)
    },
  },
  actions: {
    getPermissionRoutes(store) {
      // TODO: api request 当前暂时跳过请求(根据业务逻辑请求后端获取路由信息)
      const accessedRoutes = asyncRoutes
      // const newRoutes: Array<RouteRecordRaw> = [...constantRoutes]

      // TODO: 将新的路由正确放入路有选项的children中
      for (const r of accessedRoutes) {
        if (r.meta?.parent) {
          router.addRoute(r.meta.parent as string, r)
        } else {
          router.addRoute(r)
        }
      }
      router.options.routes = constantRoutes.concat(accessedRoutes)

      console.log(router.options.routes)
      // 触发视图变化
      store.commit('setRoutes', accessedRoutes)
    },
  },
  getters: {},
}

export default permissionModule
