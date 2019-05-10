import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'//element-ui default theme css
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import router from './router/index'//vue-router
import store from './store/index'//vuex
import './permission.js'; //permission control
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
