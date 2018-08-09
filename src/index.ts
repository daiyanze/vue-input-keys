import { VueConstructor as Vue } from "vue/types/vue"
import { PluginFunction, PluginObject } from "vue/types/plugin"
import VKeymap from './directives'

export default class VueKeymap implements PluginObject<Object> {
  public install (Vue: Vue, options?: Object): void {
    console.log('installing vue plugin')
		Vue.prototype.$keymap = {
			test: '',
			out: () => console.log('output something here...')
		}
		Vue.directive('keymap', VKeymap)
  }
}

