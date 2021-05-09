import { App } from 'vue'
import Button from './NeuButton.vue'

Button.install = (Vue: App) => {
  Vue.component(Button.name, Button)
}

export default Button