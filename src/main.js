import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import globalMixin from './mixins/globalMixin.js'
import { ApiService } from './services/ApiService'

Vue.config.productionTip = false

Vue.mixin(globalMixin)
Vue.prototype.$api = ApiService


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
