export { default as Card } from '../..\\components\\Card.vue'
export { default as Formulario } from '../..\\components\\Formulario.vue'
export { default as Home } from '../..\\components\\Home.vue'
export { default as NavHeader } from '../..\\components\\NavHeader.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
