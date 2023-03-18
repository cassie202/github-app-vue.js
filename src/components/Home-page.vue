<template>
  <main>
    <div class="Heading">
      <p class="heading--item">Overview</p>
      <p class="heading--item heading--repo">Repository</p>
      <p class="heading--item">Projects</p>
      <p class="heading--item">Packages</p>
      <p class="heading--item">Stars</p>
    </div>
    <hr />
    <div class="hero">
      <section class="aside--section">
        <img class="profile--picture" alt="profile picture" :src="`${image}`" />
        <h3 class="name">Cassandra Umeh</h3>
        <p class="user-name">{{ username }}</p>
        <p class="about-me">
          I am a frontend developer, a technical writer, and an open source
          contributor
        </p>
        <button class="edit-btn">Edit profile</button>
        <div class="follow">
          <p class="followers"><span>23</span>followers</p>
          <p class="following"><span>19</span>following</p>
        </div>
      </section>
      <section class="hero--section">
        <input
          type="text"
          class="search-repo"
          placeholder="Find a repository..."
          v-model="input"
        />
        <hr />
        <div class="repo-items">
          <div class="repo-item" v-for="(el, i) in repos" :key="i">
            <a :href="`${el.clone_url}`" class="repo-name">
              {{ el.name }}
            </a>
            <p class="about-repo">
              {{ el.description }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- pagination -->
    <div class="page-btn">
      <button class="prev-btn">Prev</button>
      <button class="next-btn">Next</button>
    </div>
  </main>
</template>

<script>
import "../Home.css";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      repos: [],
      image: "",
      username: "",
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://api.github.com/users/cassie202/repos"
      );

      this.repos = response.data;
      this.image = this.repos[0].owner.avatar_url;
      this.username = this.repos[0].owner.login;
      // console.log(this.repos, "that");
    } catch (error) {
      // console.log(error);
    }
  },
};
</script>

<style src="../Home.css"></style>
