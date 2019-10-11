<template>
  <div class="home">
    <Viewer />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Viewer: () => import('../components/Viewer.vue')
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
}
</style>
