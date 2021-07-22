import { defineComponent } from 'vue'
import './index.less'

export default defineComponent({
  setup() {
    return () => {
      return <div class="about-page">This is About Page</div>
    }
  },
})
