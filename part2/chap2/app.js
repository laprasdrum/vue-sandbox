Vue.createApp({
  data() {
    return {
      thumbnails: [
        {
          id: 1,
          src: "https://placehold.jp/300x300.png"
        },
        {
          id: 2,
          src: "https://placehold.jp/3d4070/ffffff/300x300.png"
        },
        {
          id: 3,
          src: "https://placehold.jp/3b32020/ffffff/300x300.png"
        },
      ],
      selectedThumbnailId: undefined,
      isVisible: false,
      thumbnailHeight: 0,
      isThumbnailLoaded: false
    }
  },
  watch: {
    selectedThumbnailId() {
      // 読込中にする
      this.isThumbnailLoaded = false
    }
  },
  computed: {
    currentThumbnail() {
      const self = this
      return _.find(self.thumbnails, ( thumb => thumb.id === self.selectedThumbnailId ))
    },
    containerStyle() {
      return {
        height: this.thumbnailHeight + "px"
      }
    },
    currentThumbnailIndex() {
      const self = this
      return _.findIndex(self.thumbnails, ( thumb => thumb.id == self.selectedThumbnailId ))
    },
    nextThumbnail() {
      const nextIndex = this.currentThumbnailIndex + 1
      return this.thumbnails[nextIndex > this.thumbnails.length - 1 ? 0 : nextIndex]
    },
    prevThumbnail() {
      const prevIndex = this.currentThumbnailIndex - 1
      return this.thumbnails[prevIndex < 0 ? this.thumbnails.length - 1 : prevIndex]
    }
  },
  methods: {
    openModal(thumb) {
      this.isVisible = true
      this.selectedThumbnailId = thumb.id
    },
    onLoad(event) {
      this.thumbnailHeight = Math.min(event.target.naturalHeight, 300)
      this.isThumbnailLoaded = true
    },
    closeModal() {
      this.isVisible = false
      this.selectedThumbnailId = undefined
    },
    onClickPrev() {
      this.selectedThumbnailId = this.prevThumbnail.id
    },
    onClickNext() {
      this.selectedThumbnailId = this.nextThumbnail.id
    },
  },
}).mount("#app")