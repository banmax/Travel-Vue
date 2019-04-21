import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
let defaultCity = '北京'

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx,city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
})