import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store/index'

/* Replace import createRouter from './router'
with import router from './router' */

Replace
const state = {
  user: {},
  getExerciseById: state => id => state.exercises.find(e => e.id === id)
}

new Vue({
  data: state,
  router: createRouter(state),
  vuetify,
  render: h => h(App)
}).$mount('#app')

With:

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const state = {
  user: {}
}

new Vue({
  data: state,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
