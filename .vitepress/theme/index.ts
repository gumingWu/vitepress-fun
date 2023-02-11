import Theme from "vitepress/theme";
import "./style/var.css";
import { h } from "vue";
import AnimationTitle from "../components/AnimationTitle.vue";

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-features-after": () => h(AnimationTitle),
    });
  },
  enhanceApp({ app }) {},
};
