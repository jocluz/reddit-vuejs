import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts.store'

Vue.use(Vuex)

export function storeFactory () {
  return new Vuex.Store({
    modules: {
      posts
    }
  })
}

const store = storeFactory()

export default store
