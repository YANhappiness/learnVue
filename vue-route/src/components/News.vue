<template>
  <div id="News">
      <span>{{msg}}</span>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"News",
  data(){
      return {
          msg : "this message from news page"
      }
  }
}
</script>

