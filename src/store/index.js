import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position:'',//位置地点
    userInfo:'',//用户信息
  },
  getters: {
  },
  mutations: {
    //记录位置地点geohash
    initPosition(){
      this.state.position=JSON.parse(localStorage.getItem('placeHistory'))
      this.state.position=this.state.position[this.state.position.length-1].geohash
    }
  },
  actions: {
  },
  modules: {
  }
})
