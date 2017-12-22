<template>
  <div class="footer">
    <footer>{{footer}}</footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      footer: "this is vue footer!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: aquamarine;
  color: #ccc;
}
</style>
