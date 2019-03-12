import Vue from 'vue'
import Miniui from 'v-miniui'

import App from './App.vue'

import Aui from './../index'

Vue.config.productionTip = false

Vue.use(Miniui)
Vue.use(Aui)

new Vue({
  render: h => h(App)
}).$mount('#app')
