<template>
  <div class="hello">
    <ul>
      <li v-for="(people,index) in employees" v-bind:key = "index" v-on:click="people.show = !people.show">
        <h2>{{people.name}}</h2>
        <h2 v-show="people.show">{{people.age}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['employees'],
  // data () {
  //   return {    
      // employees:[
      //   {name:"喜羊羊",age:"18",sex:"male",show:false},
      //   {name:"美羊羊",age:"17",sex:"famale",show:false},
      //   {name:"喜羊羊",age:"18",sex:"male",show:false},
      //   {name:"美羊羊",age:"17",sex:"famale",show:false},
      //   {name:"喜羊羊",age:"18",sex:"male",show:false},
      //   {name:"美羊羊",age:"17",sex:"famale",show:false},
      //   {name:"喜羊羊",age:"18",sex:"male",show:false},
      //   {name:"美羊羊",age:"17",sex:"famale",show:false},
      //   {name:"喜羊羊",age:"18",sex:"male",show:false},
      //   {name:"美羊羊",age:"17",sex:"famale",show:false},
      //   {name:"喜羊羊",age:"18",sex:"male",show:false},
      //   {name:"美羊羊",age:"17",sex:"famale",show:false},
      //   {name:"美羊羊",age:"17",sex:"famale",show:false},
      // ]  //此处为 父子组件传值注释 App.vue
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,li{
    margin: 0;
    list-style: none;
  }

  .hello{
    width:100%;
    max-width: 1200;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul{
    display: flex;
    flex-wrap:wrap;
  }

  li{
    flex-grow: 1;   /*当前行的所有元素，撑满行*/
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
