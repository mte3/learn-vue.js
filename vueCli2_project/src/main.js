import Vue from 'vue'
import App from './App'
import router from './router'

import showToast from './common/toast/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(showToast);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
