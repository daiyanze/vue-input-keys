import Vue from 'vue'
import App from './App.vue'
import VueKeymap from '../../src'

Vue.use(VueKeymap, {})

new Vue({
  el: '#app',
  render: h => h(App)
})

