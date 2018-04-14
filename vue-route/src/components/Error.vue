<template>
  <div id="Error">
      <h1>{{msg}}</h1>
      <span>this page is not find</span>
  </div>
</template>

<script>
export default {
  name:"Error",
  data(){
      return {
          msg:"404"
      }
  }
}
</script>

