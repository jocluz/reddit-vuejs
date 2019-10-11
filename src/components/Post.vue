<template>
  <div class="post" @click='read'>
    <div v-if='!model.visited' class='post__unread'></div>
    <i class='post__arrow fas fa-chevron-right'></i>
    <div class='post__header'>
      <div>
        <span class='author'>{{model.author}}</span>
        <span class='created'>{{model.created_utc}}</span>
      </div>
      <v-btn  text ligth @click='dismiss'>
        <i class='fas fa-trash'></i>
      </v-btn>
    </div>
    <div class='post__content'>
      <img v-if='model.thumbnail' :src='model.thumbnail'/>
      <span class='title'>{{model.title}}</span>
    </div>
    <span class='post__comments'>{{model.num_comments}} comments</span>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    dismiss () {
      this.$emit('dismissPost', this.model)
    },
    read () {
      this.$emit('readPost', this.model)
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  --common-padding: 30px;
  --comments-number-color: #f92a75;
  --unread: #39c7c3;

  padding: 20px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

  &__unread {
    border-radius: 50%;
    background: var(--unread);
    width: 15px;
    height: 15px;
    position: absolute;
    top: 30px;
  }

  &__arrow {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    display: flex;
    align-items: center;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: var(--common-padding);

    .author {
      font-size: 20px;
      font-weight: 500;
    }

    .created {
      font-size: 14px;
      padding-left: 10px;
    } 
  }

  &__content {
    display: flex;
    align-items: center;
    padding: 10px var(--common-padding);

    .title {
      padding-left: 10px;
    }
  }

  &__comments {
    font-size: 14px;
    color: var(--comments-number-color);
  }
}
</style>
