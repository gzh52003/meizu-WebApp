import Vue from 'vue';
import Vuex from 'vuex';
import common from './common'

Vue.use(Vuex);

const store = new Vuex.Store({
    // store模块化
    modules:{
        common,
    }
})

export default store;