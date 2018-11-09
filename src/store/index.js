import Vue from 'vue'
import Vuex from 'vuex'
import login from './moudles/login'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: null
    },
    getters: {},
    mutations: {
        loginSuccess(state,data){
            state.token = data;
        }
    },
    actions: {},
    modules:{
        login
    }
})
export default store