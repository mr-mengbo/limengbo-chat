import { Button } from 'iview'
import 'iview/dist/styles/iview.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component('Button', Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
