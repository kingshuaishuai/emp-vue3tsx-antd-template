import { defineComponent } from 'vue'
import { Row, Col } from 'ant-design-vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    console.log('slots', slots.default)
    console.log(slots.default)
    return () => {
      return (
        <div class="app-wrapper">
          <Row>
            <Col span={6}>
              <div>left</div>
            </Col>
            <Col span={18}>
              <RouterView />
            </Col>
          </Row>
        </div>
      )
    }
  },
})
