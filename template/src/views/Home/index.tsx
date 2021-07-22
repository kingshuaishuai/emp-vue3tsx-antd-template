import { defineComponent } from '@vue/runtime-dom'
import HelloWorld from '@/components/HelloWorld'
import { ref } from 'vue'
import { getDog } from '@/api/test'
import './index.less'

export default defineComponent({
  name: 'Home',
  setup() {
    const dog = ref('')
    getDog().then((res) => {
      console.log(res)
      dog.value = res.data.message
    })
    return () => {
      return (
        <div id="home">
          <h1 class="home-title">Home Page:</h1>
          <HelloWorld />
          <div>
            <h2>Api test</h2>
            <div>
              {dog.value ? <img src={dog.value} /> : <div>Loading ...</div>}
            </div>
          </div>
        </div>
      )
    }
  },
})
