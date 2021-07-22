import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <ConfigProvider locale={zhCN}>
        <RouterView></RouterView>
      </ConfigProvider>
    )
  },
})
