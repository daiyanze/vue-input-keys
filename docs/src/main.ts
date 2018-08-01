import Vue from 'vue'
import App from './App'
import VueKeymap from '../../src'

Vue.use(VueKeymap)

new Vue({
  render: h => h(App)
}).$mount('#app')

