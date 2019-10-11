import { getPosts } from '../services/reddit.service'

export default {
  namespaced: true,

  state: {
    items: {},
    after: null,
    before: null,
    selected: null
  },

  getters: {
    items (state) {
      return state.items
    },
    selected (state) {
      return state.selected
    }
  },

  mutations: {
    setPosts (state, posts) {
      state.before = posts.before
      state.after = posts.after
      state.items = Object.assign({}, state.items, posts.children)
    },
    readPost (state, post) {
      post.visited = true
      state.selected = post
    },
    dismissPost (state, post) {
      state.selected = null
      delete state.items[post.id]
    },
    dismissAll (state) {
      state.selected = null
      state.items = {}
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
