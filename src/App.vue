<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <NavTab />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import NavTab from "./components/NavTab";
import "./App.css";

export default {
  name: "App",
  components: {
    // HelloWorld,
    NavTab,
  },
};
</script>

<style src="./App.css"></style>
