import * as _Vue from "vue"

export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

interface VueKeymap<T> {
  install: PluginFunction<T>
  [key: string]: any
}

export default class Plugin implements VueKeymap<any> {
  constructor () {
    console.log('it works')
  }

  public install (Vue: typeof _Vue, options?: Object): void {
    console.log('installing vue plugin')
  }
}
