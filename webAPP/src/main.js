import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request.js'


Vue.config.productionTip = false
Vue.prototype.$request = request
console.log(store);
new Vue({

	router,
	store,

  render: h => h(App),
}).$mount('#app')
