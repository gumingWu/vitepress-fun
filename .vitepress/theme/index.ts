import Theme from 'vitepress/theme'
import './style/var.css'
import { h } from 'vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout)
  },
  enhanceApp({ app }) {
  }
}