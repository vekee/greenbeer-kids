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
    // カスタムボタンを定義
    const Button = videojs.getComponent('Button')
    class DownloadButton extends Button {
      constructor(player, options) {
        super(player, options)
        this.controlText('Download Video')
        this.addClass('vjs-icon-download')
      }

      handleClick() {
        const link = document.createElement('a')
        link.href = this.player_.options_.videoUrl
        link.download = this.getFileName(this.player_.options_.videoUrl)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }

      getFileName(url) {
        return url.split('/').pop()
      }
    }

    // カスタムボタンを登録
    videojs.registerComponent('DownloadButton', DownloadButton)

    // カスタムボタンをコントロールバーに追加
    this.player.ready(() => {
      this.player.getChild('controlBar').addChild('DownloadButton', {})
    })

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
.video-js {
  width: 286px; /* 幅を設定 */
  height: 216px; /* 高さを設定 */
}
</style>
