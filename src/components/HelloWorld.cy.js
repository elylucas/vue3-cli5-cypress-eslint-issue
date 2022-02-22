import { mount } from "@cypress/vue"
import Helloworld from "./HelloWorld.vue"

describe('<Helloworld />', () => {
  it('renders', () => {
    // see: https://vue-test-utils.vuejs.org/
    mount(Helloworld, { props: {} })
  })
})