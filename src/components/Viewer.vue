<template>
  <div class="viewer">
    <i v-if="loading" class="viewer__loading fas fa-circle-notch fa-spin"></i>

    <div class='viewer__left__content' v-else>
      <aside class='viewer__left' >
        <v-navigation-drawer
          v-model="drawer"
          width='auto'
          app>
          <h2 class='viewer__left__title'>Reddit posts</h2>

          <transition-group class='viewer__left__list' name="list" tag="div">
            <Post class='viewer__left__post'
                  v-for='post in items' :key='post.id'
                  :model='post'
                  @readPost='onReadPost'
                  @dismissPost='onDismissPost'/>
          </transition-group>

          <div class='viewer__left__footer'>
            <v-btn :loading="loadingNext"
                  :disabled="loadingNext"
                  bottom left absolute
                  @click="loadMorePosts">
                  Load more
              <template v-slot:loader>
                <i class="fas fa-circle-notch fa-spin"></i>
              </template>
            </v-btn>
            <v-btn bottom right absolute @click='dismissAllPosts'>Dismiss All</v-btn>
          </div>
        </v-navigation-drawer>
      </aside>

      <div class='viewer__right' v-touch="touch">
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
      loadingNext: false,
      drawer: null,
      touch: {
        right: () => this.toggle()
      }
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
    ...mapMutations('posts', ['readPost', 'dismissPost', 'dismissAll']),
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
    },
    loadMorePosts () {
      this.loadingNext = true
      this.getPostsSlice()
        .finally(() => {
          this.loadingNext = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    dismissAllPosts () {
      this.dismissAll()
    },
    toggle () {
      this.drawer = !this.drawer
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

  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: var(--title-color);
    font-size: 50px;
  }

  &__left {
    overflow: auto;

    @include xl {
      width: 400px;
    }

    &__content {
      display: flex;
      flex-grow: 1;
      min-height: 0;
    }

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
      background-color: var(--viewer-background);
      max-width: 400px;

      &__post {
        border-bottom: 1px solid white;
        transition: all 1s;
      }
    }

    &__footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--title-color);
      height: 70px;
    }
  }

  &__right {
    display: flex;
    flex-grow: 1;
    z-index: 1;
    justify-content: center;
  }

  .list-enter-active, .list-leave-active {
    transition: all .5s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }

  .v-navigation-drawer__content {
    margin-bottom: 70px;
    margin-top: 70px;
  }
}

</style>
