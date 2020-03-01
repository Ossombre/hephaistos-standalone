import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import createRouter from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const state = {
  user: {}
}

new Vue({
  data: state,
  router: createRouter(state),
  vuetify,
  render: h => h(App)
}).$mount('#app')
