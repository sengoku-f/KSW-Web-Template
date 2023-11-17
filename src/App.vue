<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="text-6xl text-yellow-500 bg-blue-800 w-96">123</div>
    <div class="bbm">321</div>
    <MyTag color="red">233</MyTag>
    <MyTag title="23333" color="blue"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyTag from './components/MyTag.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyTag,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.k_h1 {
  @apply text-xl font-medium;
}
.el-checkbox__label{
@apply text-sm;
}

.el-checkbox__label__ed{
@apply text-sm text-red-500;
}
</style>
