<template>
  <view id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button>test</button>
    <a-button type="success" block>a button</a-button>
    <a-progress :value="40" size="sm" />
  </view>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
