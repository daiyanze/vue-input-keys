
export default {
  bind (el: HTMLElement, binding: object, vnode: object) {
    console.log(binding)
    const { arg = 'up' } = binding
  }
}

