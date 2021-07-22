import { createApp } from 'vue'
import router from './router'
import { store, key } from './store'

// global
import 'dayjs/locale/zh-cn'
import App from './App'

// style
import './styles/index.less'

store.dispatch('permissionModule/getPermissionRoutes')

const app = createApp(App).use(router).use(store, key)

app.mount('#emp-root')
