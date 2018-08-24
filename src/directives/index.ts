import { VNode, VNodeDirective } from 'vue/types/vnode'
import { DirectiveFunction, DirectiveOptions } from 'vue/types/options'
import Vue from 'vue'
import { alpha } from '../maps'

export default {
  bind (
    el: HTMLElement,
    binding: VNodeDirective,
    node: VNode,
    oldVnode: VNode
  ): void {
    console.log(binding)
    const {
      arg = 'up',
      modifiers = {},
      value
    } = binding

    // const modifierKeys = Object.keys(modifiers)
    // if (modifierKeys.length) {
      
    // }
    el.addEventListener('keyup', e => {

      console.log(alpha.validate(e.keyCode))
    })
  }
}
