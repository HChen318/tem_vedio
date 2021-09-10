import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false, // 左侧导航折叠状态
    topNavState: 'home',
    leftNavState: 'home'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
