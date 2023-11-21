<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="text-6xl text-yellow-500 bg-blue-800 w-96">123</div>
    <div class="bbm">321</div> -->
    <div style="display: flex">
      <Tag type="success">success</Tag>
      <Tag type="info">info</Tag>
      <Tag type="warning">warning</Tag>
      <Tag type="danger">danger</Tag>
      <Tag type="default">default</Tag>
      <Tag type="default" :auto="auto.success">{{auto.success}}</Tag>
      <Tag type="default" :auto="auto.success" isBlock>{{auto.success}}</Tag>
      <Tag :auto="'#87d068'">#87d068</Tag>
      <Tag type="default" :auto="auto.danger">{{auto.danger}}</Tag>
      <Tag type="default" :auto="auto.info">{{auto.info}}</Tag>
      <Tag type="default" :auto="auto.default" isBlock>{{auto.default}}</Tag>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Tag from "./components/Tag.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Tag,
  },
  data() {
    return {
      auto: {
        success: '#87d068',
        danger: '#cd201f',
        success2: '#cd201f',
        info: "#2db7f5",
        default: "#888888"
      },
    };
  },
};
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
.el-checkbox__label {
  @apply text-sm;
}

.el-checkbox__label__ed {
  @apply text-sm text-red-500;
}
</style>
