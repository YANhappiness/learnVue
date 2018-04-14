<template>
  <div id="Fun">
      <span>{{msg}}</span>
      <span>{{$route.name}}</span>
      <span>{{$route.params.username}}</span>
      <span>{{$route.params.id}}</span>
  </div>
</template>

<script>
export default {
  name:"Fun",
  data(){
      return {
          msg : "this message from fun page"
      }
  }
}
</script>

