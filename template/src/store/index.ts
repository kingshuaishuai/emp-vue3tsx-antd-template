import { InjectionKey } from 'vue'
import { createStore, useStore as useBaseStore, Store } from 'vuex'
import { AllStateTypes } from './types'
import permissionModule from './modules/permission'

export const key: InjectionKey<Store<AllStateTypes>> = Symbol('v3-store')

export const store = createStore<AllStateTypes>({
  state: {
    count: 0,
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    permissionModule,
  },
})

export function useStore<T = AllStateTypes>(): Store<T> {
  return useBaseStore<T>(key)
}
