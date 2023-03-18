<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <NavTab />
  <HomePage />
  <!-- <Router-view: page="page" :repos="repos" @update="updatePage"></Router-view:> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import NavTab from "./components/NavTab";
import "./App.css";
import HomePage from "./components/Home-page.vue";
// import repoData from "./components/repoData";
// import errorPage from "./components/errorPage";

export default {
  name: "App",
  components: {
    // HelloWorld,
    NavTab,
    HomePage,
    // repoData,
    // errorPage,
  },
  // data() {
  //   return {
  //     repos: [],
  //     page: 1,
  //     num: 8,
  //   };
  // },
  // methods: {
  //   getRepos() {
  //     axios
  //       .get(
  //         `https://api.github.com/users/cassie202/repos?page=${this.page}&per_page=10`
  //       )
  //       .then((response) => {
  //         this.repos = response.data;
  //       });
  //   },
  //   updatePage(value) {
  //     this.page = Number(value.target.textContent);
  //   },
  // },
  // created() {
  //   this.getRepos();
  // },
  // watch: {
  //   page() {
  //     this.getRepos();
  //   },
  // },
};
</script>

<style src="./App.css"></style>
