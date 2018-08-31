import { VNode, VNodeDirective } from 'vue/types/vnode'
import { DirectiveFunction, DirectiveOptions } from 'vue/types/options'
import Vue from 'vue'
import mappings from '../mappings'

export default {
  bind (
    el: HTMLElement,
    binding: VNodeDirective,
    node: VNode,
    oldVnode: VNode
  ): void {
    console.log(binding)
    const {
      arg = 'down',
      modifiers = {},
      value: {
        maps,
        exec
      }
    } = binding

    // const modifierKeys = Object.keys(modifiers)
    // if (modifierKeys.length) {
      
    // }
    let when = 'keydown'
    if (arg == 'arg') {
      when = 'keyup'
    }
    el.addEventListener(when, e => {

      for (const m in maps) {
        if (!mappings[m](e .keyCode)) {
          e.preventDefault()
          e.stopPropagation()
          return
        }
        exec(e)
        
      }
    }, false)
  }
}
