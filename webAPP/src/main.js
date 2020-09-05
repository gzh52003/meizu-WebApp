import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request.js'


Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
