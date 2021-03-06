import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import { filters } from './utils/filters'

// Filters
Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
