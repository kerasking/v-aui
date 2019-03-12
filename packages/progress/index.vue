<template>
  <view :class="progressClass">
    <view
      class="aui-progress-bar"
      :style="progressVal"
    ></view>
  </view>
</template>
<script>
import { Env } from 'v-miniui'
export default {
  name: 'a-progress',
  props: {
    size: String,
    value: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressClass () {
      var classes = ['aui-progress']
      if (this.size) {
        classes.push(`aui-progress-${this.size}`)
      }
      return classes
    },
    progressVal () {
      if (Env.isWeex) {
        return {
          width: (this.value / 100) * this.width + 'px'
        }
      }
      return {
        width: this.value + '%'
      }
    }
  }
}
</script>
<style scoped>
/*进度条*/
.aui-progress {
  width: 100%;
  height: 1rem;
  border-radius: 0.2rem;
  overflow: hidden;
  background-color: #f0f0f0;
}
.aui-progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 0.6rem;
  line-height: 1rem;
  color: #ffffff;
  text-align: center;
  background-color: #03a9f4;
}
.aui-progress.sm,
.aui-progress-sm {
  height: 0.5rem;
}
.aui-progress.sm,
.aui-progress-sm,
.aui-progress.sm .aui-progress-bar,
.aui-progress-sm .aui-progress-bar {
  border-radius: 1px;
}
.aui-progress.xs,
.aui-progress-xs {
  height: 0.35rem;
}
.aui-progress.xs,
.aui-progress-xs,
.aui-progress.xs .progress-bar,
.aui-progress-xs .progress-bar {
  border-radius: 1px;
}
.aui-progress.xxs,
.aui-progress-xxs {
  height: 0.15rem;
}
.aui-progress.xxs,
.aui-progress-xxs,
.aui-progress.xxs .progress-bar,
.aui-progress-xxs .progress-bar {
  border-radius: 1px;
}
</style>
