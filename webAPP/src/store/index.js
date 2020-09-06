
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import common from './common'
import recommend from './recommend.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	
	modules:{
		common,
		cart,
		recommend
	}
})

export default store

