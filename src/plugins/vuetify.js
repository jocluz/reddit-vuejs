// import just components I use
import Vue from 'vue'
import Vuetify, {
  VNavigationDrawer,
  VBtn
} from 'vuetify/lib'
import { Touch } from 'vuetify/lib/directives'
import('vuetify/dist/vuetify.min.css')

Vue.use(Vuetify, {
  components: {
    VNavigationDrawer,
    VBtn
  },
  directives: {
    Touch
  }
})

export default new Vuetify()
