import { VNode, VNodeDirective } from 'vue/types/vnode'
import { DirectiveFunction, DirectiveOptions } from 'vue/types/options'
import Vue from 'vue'

interface Mappings {
  [key: string]: Function
}

function initKeyboardEvent (
  el: HTMLElement,
  keyboardEventName: string,
  maps: Array<Function>
) {
  keyboardEventName === 'onkeyup' ? 'onkeyup' : 'onkeydown'
  el[keyboardEventName === 'onkeyup' ? 'onkeyup' : 'onkeydown'] =
    function (e: any) {
      maps.every(m => !m(e.keyCode)) &&
      e.preventDefault() && e.stopPropagation()
    }
}

export default {
  bind (
    el: HTMLElement,
    binding: VNodeDirective,
    vnode: VNode,
    oldVnode: VNode
  ): void {
    const {
      arg = 'down',
      modifiers = {},
      value
    } = binding

    if (!vnode.context || !vnode.context.$inputKeys) return

    const modifiersList = Object.keys(modifiers)
    if (modifiersList.length && value) {
      console.warn(
        `[vue-input-keys]: 'modifers' and 'value' cannot be used at the same time \n ${JSON.stringify(modifiers)} \n ${value}
        `
      )
      return
    }

    const inputKeys = vnode.context.$inputKeys

    const maps: Array<Function> = []

    if (typeof value === 'string' && value.length) {
      const al = value.split('|')
      for (const a of al) {
        if (inputKeys.maps[a]) {
          maps.push(inputKeys.maps[a])
        } else {
          console.warn(
           `[vue-input-keys]: '${a}' is not a defined keyboard map`
          )
          continue
        }
      }
    } else if (typeof value === 'function') {
      maps.push(value)
    } else if (typeof value === undefined && modifiersList.length) {
      for (const modifier of modifiersList) {
        if (inputKeys.maps[modifier]) {
          maps.push(inputKeys.maps[modifier])
        } else {
          console.warn(
           `[vue-input-keys]: '${modifier}' is not a defined keyboard map`
          )
          continue
        }
      }
    } else {
      return
    }
    initKeyboardEvent(el, arg, maps)
  },
  update (
    el: HTMLElement,
    binding: VNodeDirective,
    vnode: VNode,
    oldVnode: VNode
  ) {
    const {
      arg = 'down',
      value,
      oldValue
    } = binding

    if (value === oldValue) return
    if (!vnode.context || !vnode.context.$inputKeys) return

    const inputKeys = vnode.context.$inputKeys

    const maps: Array<Function> = []
    if (typeof value === 'string' && value.length) {
      const al = value.split('|')
      for (const a of al) {
        if (inputKeys.maps[a]) {
          maps.push(inputKeys.maps[a])
        } else {
          console.warn(
           `[vue-input-keys]: '${a}' is not a defined keyboard map`
          )
          continue
        }
      }
    }
    initKeyboardEvent(el, arg, maps)
  }
}
