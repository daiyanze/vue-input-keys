import Vue from 'vue'
import { VueConstructor } from "vue/types/vue"
import directives from "./directives"
import * as defaultMaps from './maps'

interface Option {
  // keyboard listeners' judgement function
  maps: object
}

declare module 'vue/types/vue' {
  interface Vue {
    $inputKeys: any
  }
}

const vueInputKeys = {
  install (
    vue: VueConstructor,
    options?: Option
  ): void {
    const inputKeys = {
      maps: defaultMaps,
      listeners: {}
    }
    if (options && options.maps)
      inputKeys.maps = Object.assign(inputKeys.maps, options.maps)
    vue.prototype.$inputKeys = inputKeys
    vue.directive('input-keys', directives)
  }
}

export default vueInputKeys

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueInputKeys)
}
