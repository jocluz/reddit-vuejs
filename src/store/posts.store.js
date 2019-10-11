import { getPosts } from '../services/reddit.service'

export default {
  namespaced: true,

  state: {
    items: {},
    after: null,
    before: null
  },

  getters: {
    items (state) {
      return state.items
    }
  },

  mutations: {
    setPosts (state, posts) {
      state.before = posts.before
      state.after = posts.after
      state.items = Object.assign({}, state.items, posts.children)
    }
  },

  actions: {
    async getPostsSlice ({ state, commit }) {
      const posts = await getPosts(state)
      commit('setPosts', posts)
      return posts
    }
  }
}
