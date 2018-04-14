<template>
  <div id="Vuex">
    <hr>
    {{msg}}
    <br>
    {{$store.state.count}}

  </div>
</template>

<script>

import store from '@/vuex/store'
export default {
  data(){
    return {
      msg:"Vuex"
    }
  },
  store
}
</script>

<style>
    
</style>

