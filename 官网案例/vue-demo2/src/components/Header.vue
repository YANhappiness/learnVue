<template>
  <div class="header">
    <header>{{header}}</header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      header: "this is vue head!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background: #ccc;
  color: aquamarine;
}
</style>
