<template>
  <div class="post-detail" v-if='model'>
    <h3 class='post-detail__author'>{{model.author}}</h3>
    <img class='post-detail__img' v-if='model.thumbnail' :src='model.thumbnail'/>
    <span class='post-detail__title'>{{model.title}}</span>
    <a :href="model.url" target="_blank">Read more on {{ model.domain }}</a>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  props: {
    model: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.post-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 20px;
  position: relative;
  max-width: 500px;

  &__img {
    padding: 30px 0;
  }
}
</style>
