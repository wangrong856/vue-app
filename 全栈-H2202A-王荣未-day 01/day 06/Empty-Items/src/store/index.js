import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
// import persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    token:(state)=>state.login.token,
    userId:(state)=>state.login.userInfo.userId,
    userName:(state)=>state.login.userInfo.username,
    userImg:(state)=>state.login.userInfo.staffPhoto
  },
  modules: {
    login
  },
  // plugins: [persistedstate()]
})
