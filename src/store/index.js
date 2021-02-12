import Vue from 'vue'
import Vuex from './zvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    addCount(state,payload){
      state.count+=payload
    }
  },
  actions: {
    addCountSync({commit},{payload}){
      setTimeout(()=>{
        commit("addCount",payload)
      },2000)
    }
  },
  modules: {
  }
})
