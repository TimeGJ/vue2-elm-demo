import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position:null,//位置地点
    userInfo:null,//用户信息
    serviceAnswer:[],//问题答案
    username:null,//用户名
    city_id:null,//城市id
  },
  getters: {
  },
  mutations: {
    //记录位置地点geohash
    initPosition(){
      this.state.position=JSON.parse(localStorage.getItem('placeHistory'))
      this.state.position=this.state.position[this.state.position.length-1].geohash
    },
    //获取userInfo
    getUserInfo(){
      if(localStorage.getItem('user_id')){
        this.state.userInfo=localStorage.getItem('user_id')
      }
      return
    },
    //清空userinfo
    clearUserInfo(){
      this.state.userInfo=null
      localStorage.removeItem('user_id')
    },
    //获取答案
    getServiceAnswer(state,data){
        state.serviceAnswer=data
    },
    //储存用户名
    changeUSername(state,username){
      state.username=username
    },
    //储存城市id
    laycityid(state,id){
      state.city_id=id
    }
  },
  actions: {
  },
  modules: {
  }
})
