// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/style.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isCollapse: false
  },
  getters: {
    getFlag (state) {
      return state.isCollapse
    }
  },
  mutations: {
    changeFlag (state, payload) {
      // console.log(payload)
      // console.log(this.state.isCollapse)
      state.isCollapse = !payload.isCollapse;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
