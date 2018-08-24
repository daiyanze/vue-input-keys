import Vue from 'vue'
import { VueConstructor } from "vue/types/vue"
import directives from "./directives"

interface Option {
  maps: {},
  [key: string]: any
}

declare module 'vue/types/vue' {
  interface Vue {
    $keymap: any
  }
}

const vueKeymap = {
  defaultOptions: {
    test: ''
  },
  install (
    vue: VueConstructor,
    options?: Option
  ): void {
    vue.prototype.$keymap = {
      test: ''
    }
    vue.directive('keymap', directives)
  }
}

export default vueKeymap

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueKeymap)
}
