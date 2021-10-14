import Vue from 'vue'
import Vuex from 'vuex'
import pessoaStore from './modules/pessoa'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pessoa: pessoaStore,
    }
})