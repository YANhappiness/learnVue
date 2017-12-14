<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <componentdemo></componentdemo>
    <!-- <componentdemo2></componentdemo2> -->

    <!-- 使用router-link组件来导航，通过to属性来指定指定链接  默认渲染成a链接-->
    <router-link to="/first">page 1</router-link>
    <router-link to="/second">page 2</router-link>
    <!-- 路由匹配的组件将渲染在router-view -->
    <router-view></router-view>
  </div>
</template>

<script>

//引入component文件夹下的componentdemo.vue,并展示在indexhtml文件内
//1。引入文件 import ... from ...
//2。正确注册组件
//3。在自定义标签内使用组件
import componentdemo from './component/componentdemo.vue';
// import componentdemo2 from './component/componentdemo2.vue'
export default {
  name: 'app',
  components: {componentdemo,},   /* componentdemo2 */
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
