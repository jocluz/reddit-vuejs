<template>
  <div class="viewer">
    <div class='viewer__left'>
      <Post v-for='post in items' :key='post.id' :model='post'/>
    </div>

    <div class='viewer__right'>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Viewer',

  data () {
    return {
      loading: false
    }
  },

  components: {
    Post: () => import('./Post.vue')
  },

  computed: {
    ...mapGetters('posts', ['items'])
  },

  created () {
    this.loadPosts()
  },

  methods: {
    ...mapActions('posts', ['getPostsSlice']),
    loadPosts () {
      this.loading = true
      this.getPostsSlice()
        .finally(() => {
          this.loading = false
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.viewer {
  display: flex;
  min-height: 0;
  flex-grow: 1;

  &__left {
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    max-width: 500px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 70%;
  }
}

</style>
