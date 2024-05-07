<template>
  <video
    ref="videoPlayer"
    class="video-js vjs-default-skin vjs-big-play-centered"
    controls
    preload="auto"
    width="286px"
    height="216px"
  >
    <source :src="videoUrl" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
  props: {
    videoUrl: String
  },
  mounted() {
    // Video.js の初期化
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })
  },
  beforeUnmount() {
    // コンポーネントが破棄される前に Video.js を破棄
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>
/* カスタムスタイルを追加 */
</style>
