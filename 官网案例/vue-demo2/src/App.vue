<template>
  <div id="app">
    <app-header></app-header>
    <HelloWorld v-bind:employees ="employees"></HelloWorld>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* 父子间传值

  1.父往子传值：
      0. 父组件data中定义prop数据
      1. 父组件中通过v-bind:propName="propName" 传入 value （"PropName"）

      2.子组件中通过 props:["propName"] 接收传输的value
      3.子组件中通过模版调用{{propName}}
*/


export default {
  name: "app",
  data: function() {
    return {
      employees: [
        { name: "喜羊羊", age: "18", sex: "male", show: false },
        { name: "美羊羊", age: "17", sex: "famale", show: false },
        { name: "喜羊羊", age: "18", sex: "male", show: false },
        { name: "美羊羊", age: "17", sex: "famale", show: false },
        { name: "喜羊羊", age: "18", sex: "male", show: false },
        { name: "美羊羊", age: "17", sex: "famale", show: false },
        { name: "喜羊羊", age: "18", sex: "male", show: false },
        { name: "美羊羊", age: "17", sex: "famale", show: false },
        { name: "喜羊羊", age: "18", sex: "male", show: false },
        { name: "美羊羊", age: "17", sex: "famale", show: false },
        { name: "喜羊羊", age: "18", sex: "male", show: false },
        { name: "美羊羊", age: "17", sex: "famale", show: false },
        { name: "美羊羊", age: "17", sex: "famale", show: false }
      ]
    };
  },
  components: {
    HelloWorld: HelloWorld,
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
