import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './untils/rem.js'
import './style/common.css'
import '../src/font_3820450_wie6i9cb6t/iconfont.js'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
