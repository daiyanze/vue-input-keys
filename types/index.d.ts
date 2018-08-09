import Vue from 'vue'

declare module 'vue/types/vue' {
	interface VueConstructor {
		$keymap: Object
	}
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string
  }
}
