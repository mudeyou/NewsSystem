<template>
  <div id="app">
    <Nav></Nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Home from "./views/Home";
import Nav from "./views/Nav";
export default {
  components: {
    // Home,
    Nav,
  },
};
</script>

<style scoped>
.container {
  width: 1080px;
  margin: 30px auto;
}
</style>
