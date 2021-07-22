import { defineComponent } from 'vue'
import styles from './HelloWorld.module.less'
import logo from '../logo.png'
import { add } from 'lodash'

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => {
      return (
        <div class={styles['layout-app']}>
          <img class={styles.img} src={logo} width="30" />
          <h1>hello world!</h1>
          <p>EMP Vue3 TSX template</p>
          <div>lodash test (1 + 2) = {add(1, 2)}</div>
        </div>
      )
    }
  },
})
