import Theme from 'vitepress/theme'
import './style/var.css'
import FreeStyle from '../components/FreeStyle.vue'
import { h } from 'vue'
import HeroBefore from '../components/HeroBefore.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-hero-before': () => h(HeroBefore)
    })
  },
  enhanceApp({ app }) {
    app.component('FreeStyle', FreeStyle)
  }
}