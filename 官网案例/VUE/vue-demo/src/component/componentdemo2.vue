<template>
  <div id="componentdemo2">
      <h2>this is componentdemo2</h2>
      <p v-bind:class="{fontColor:fontColor}" v-bind:style="{fontSize:fontSize+'px'}">{{dateTime}}</p>

      <!-- vue-resource 动态加载外部数据 -->
      <ul>
          <li v-for="(article,index) in articles" :key="index">{{article.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
      return{
          dateTime:"当前时间"+new Date().toLocaleString(),
          fontSize:40,
          fontColor:true,
          articles:[]
      }
  },
  mounted:function(){
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
          headers:{

          },
          emulateJSON: true,
      }).then(function(response){
          //success
          this.articles = response.data["subjects"];
      }),function(response){
          //error
          console.log(response);
      }
  }
}
</script>

<style>
    .fontColor{
        color: red;
    }
</style>

