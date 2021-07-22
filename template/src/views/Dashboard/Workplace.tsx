import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const router = useRouter()
    console.log('current routes', router.options.routes)
    return () => {
      return (
        <div class="dashboard">
          <h1>this is dashboard workspace</h1>
        </div>
      )
    }
  },
})
