<template>
  <div id="app">
		  <!-- vue 案例 -->
			<!-- <router-link to="/News/AboutFun">娱乐新闻</router-link> -->
			<!-- <router-link :to="{name:'AboutFun',params:{username:'yanhappiness',id:'0976'}}">娱乐新闻</router-link> -->
			<el-row :gutter="20">
				<el-col :span="6"><div class="grid-content bg-purple"><router-link to="/">首页</router-link></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple"><router-link to="/News">新闻</router-link></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple"><router-link to="/News/AboutSport">体育新闻</router-link></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple"><router-link to="/Goods">商品</router-link></div></el-col>
			</el-row>
		<el-main>
    		<router-view/>
		</el-main>

    
    <!-- <div>
      {{$route.name}}
      <br>
      {{$store.state.count}}
    </div> -->
    
  </div>
</template>

<script>
import store from "@/vuex/store";
import axios from "axios"; //是一个基于promise的HTTP库，可以用在浏览器和node.js中
export default {
  name: "App",
  store,
  created() {
    axios
      .get("http://jspang.com/DemoApi/oftenGoods.php")
      .then(response => {
        // console.log(response.data);
      })
      .catch();
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  vertical-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.grid-content a{
	width:100%;
	height:100%;
	text-align: center;
}
</style>
