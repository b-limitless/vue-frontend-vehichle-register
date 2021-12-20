<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import "./sass/main.scss";
import Header from "./components/common/header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>
