import * as _Vue from "vue"

export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

interface _VueKeymap<T> {
  install: PluginFunction<T>
  [key: string]: any
}

export default class VueKeymap implements _VueKeymap<any> {

  static install (Vue: typeof _Vue, options?: Object): void {
    console.log('installing vue plugin')
  }
}

if (typeof window !== 'undefined' && !!window['Vue']) {
	  window['Vue'].use(VueKeymap);
}

