import * as _Vue from "vue"

export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

export interface PluginObject<T> {
	  install: PluginFunction<T>
		[key: string]: any
}

class Plugin implements PluginObject<any> {
  constructor () {
    console.log('it workds')
  }

	public install (Vue: typeof _Vue, options?: Object): void {
		console.log('installing vue plugin')
	}
}
