<template>
  <div class="post" @click='read'>
    <div v-if='!model.visited' class='post__unread'></div>
    <div class='post__header'>
      <div>
        <span class='author'>{{model.author}}</span>
        <span class='created'>{{model.created}}</span>
      </div>
      <button @click='dismiss'>X</button>
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
  padding: 20px;
  position: relative;
  cursor: pointer;

  &__unread {
    border-radius: 50%;
    background: #39c7c3;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 25px;
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
    padding-left: 30px;

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
    padding: 10px 30px;

    .title {
      padding-left: 10px;
    }
  }

  &__comments {
    font-size: 14px;
    color: #f92a75;
  }
}
</style>
