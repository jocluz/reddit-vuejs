<template>
  <div class="viewer">
    <div class='viewer__left'>
      <v-navigation-drawer
        class='viewer__left__drawer__drawer'
        v-model="drawer"
        width='auto'
        app>
        <h2 class='viewer__left__drawer__title'>Reddit posts</h2>

        <transition-group class='viewer__left__drawer__list' name="list" tag="div">
          <Post class='viewer__left__drawer__post'
                v-for='post in items' :key='post.id'
                :model='post'
                @readPost='onReadPost'
                @dismissPost='onDismissPost'/>
        </transition-group>
      </v-navigation-drawer>

      <div class='viewer__right'>
        <PostDetails v-if='selected' :model='selected'/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Viewer',

  data () {
    return {
      loading: false,
      drawer: null
    }
  },

  components: {
    Post: () => import('./Post.vue'),
    PostDetails: () => import('./PostDetails.vue')
  },

  computed: {
    ...mapGetters('posts', ['items', 'selected'])
  },

  created () {
    this.loadPosts()
  },

  methods: {
    ...mapActions('posts', ['getPostsSlice']),
    ...mapMutations('posts', ['readPost', 'dismissPost']),
    loadPosts () {
      this.loading = true
      this.getPostsSlice()
        .finally(() => {
          this.loading = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    onReadPost (post) {
      this.readPost(post)
    },
    onDismissPost (post) {
      this.dismissPost(post)
    }
  }
}
</script>

<style lang="scss">
.viewer {
  --viewer-background: #f5f5f5;
  --title-color: #39c7c3;

  display: flex;
  min-height: 0;
  flex-grow: 1;

  &__left {
    flex-grow: 1;

    &__drawer {
      &__title {
        padding: 10px;
        background-color: var(--title-color);
        color: white;
        height: 70px;
        align-items: center;
        justify-content: center;
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }

      &__list {
        display: flex;
        flex-direction: column;
        flex-basis: 30%;
        background-color: var(--viewer-background);
        max-width: 400px;

        &__post {
          border-bottom: 1px solid white;
          transition: all 1s;
        }
      }
    }
  }

  &__right {
    display: flex;
    flex-basis: 70%;
    flex-grow: 1;
    z-index: 1;
    justify-content: center;
  }

  .list-enter-active, .list-leave-active {
    transition: all .5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .v-navigation-drawer__content {
    margin-top: 70px;
  }
}

</style>
