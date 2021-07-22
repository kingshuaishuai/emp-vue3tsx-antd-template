import { RouteLocationRaw } from 'vue-router'

export default interface PermissionStateTypes {
  roles: Array<number>
  routes: Array<RouteLocationRaw>
}
