import Vue from 'vue'
import { VueConstructor } from "vue/types/vue"
import directives from "./directives"
import * as mappings from './mappings'

interface Option {
  mappings: {},
  [key: string]: any
}

declare module 'vue/types/vue' {
  interface Vue {
    $keymap: any
  }
}

const vueKeymap = {
  defaultOptions: {
    mappings
  },
  install (
    vue: VueConstructor,
    options?: Option
  ): void {
    let mappings = this.defaultOptions.mappings
    if (options) {
      mappings = {
        ...this.defaultOptions.mappings,
        ...(options.mappings || {})
      }
    }
    vue.prototype.$keymap = {
      mappings,
      bind: () => {},
      unbind: () => {}
    }
    vue.directive('keymap', directives)
  }
}

export default vueKeymap

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueKeymap)
}
