export default {
  computed: {
    withThumbnail () {
      return this.model.thumbnail &&
        this.model.thumbnail !== 'nsfw' &&
        this.model.thumbnail !== 'default' &&
        this.model.thumbnail !== 'self'
    }
  }
}
