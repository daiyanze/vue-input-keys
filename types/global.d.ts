import { VueConstructor as Vue } from "vue/types/vue"

declare global {
  interface Window {
    Vue: Vue
  }
}

