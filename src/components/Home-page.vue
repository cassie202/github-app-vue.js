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
        <p class="user-name">{{username}}</p>
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
        <div class="repo-items" >
          <div class="repo-item" v-for="(el, i) in currentRepos" :key="i">
            <a :href="`${el.clone_url}`" class="repo-name" >
              {{ el.name }}
            </a>
            <p class="about-repo">
              {{ el.description }}
            </p>
            <button
              class="view-repo-btn"
              @click="() => $router.push(`/${el.id}`)"
            >
              View Repo
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- pagination -->
    <div class="page-btn">
      <button class="prev-btn" :disabled="page<= 1" @click="prevPage">Prev</button>
      <button v-for="(num , idx) in buttons" :key="idx" :disabled="page=== num" @click="page = num">{{num}}></button>
      <button class="next-btn" :disabled="page >= pages" @click="nextPage">Next</button>
    </div>
  </main>
</template>

<script>
import axios from "axios";


export default {
  name: "HomePage",
  data() {
    return {
      repos: [],
      image: "",
      username: "",
      page: 1,
      PER_PAGE: 6,
    };
  },
  computed: {
    skip() {
      return this.page * this.PER_PAGE
    },
    indexOfFirstRepo() {
      return this.skip - this.PER_PAGE
    },
    currentRepos() {
      return this.repos.slice(this.indexOfFirstRepo, this.skip)
    },
    pages() {
      return this.repos.length / this.PER_PAGE
    }, 
    buttons() {
      return Array.from({ length: this.pages }, (value, index) => index + 1)
    }
  },
  methods:{
    nextPage() {
      this.page += 1
    },
    prevPage() {
      this.page -= 1
    }
  },

  async mounted() {
    
    try {
      const response = await axios.get(
        "https://api.github.com/users/cassie202/repos"
      );

      this.repos = response.data;
      this.image = this.repos[0].owner.avatar_url;
      this.username = this.repos[0].owner.login;
    } catch (error) {
      console.log(error);
    }

    
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap");

body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
.Heading {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.heading--item {
  padding: 25px 20px 5px 20px;
  margin-top: 10px;
  margin-bottom: 2px;
}
.heading--repo {
  font-weight: 600;
}
hr {
  margin-top: 0;
  font-weight: lighter;
  color: #d8dee4;
}
.search-repo {
  width: 200px;
  margin: 0 auto;
  border: 10px solid rgb(36, 41, 47);
  padding: 7px 30px;
}
.hero {
  display: flex;
  flex-direction: row;
}
.aside--section {
  width: 300px;
  align-items: center;
  padding: 50px;
}
.profile--picture {
  width: 150px;
  border-radius: 100px;
}
.name {
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
}
.user-name {
  font-weight: 300;
  margin-top: 0;
  color: #57606a;
  font-size: 16px;
  line-height: 24px;
}
.about-me {
  font-size: 16px;
  word-spacing: normal;
}
.edit-btn {
  width: 250px;
  background-color: #24292F;
  border: 1px solid #ccc;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #ffff;
}
.follow {
  display: flex;
  flex-direction: row;
  color: #57606a;
}
.followers {
  margin-right: 10px;
}
span {
  font-weight: 600;
}
.hero--section {
  margin-top: 20px;
}
.search-repo {
  width: 400px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #ccc;
}
.repo-item {
  background-color: #24292f;
  width: 700px;
  height: 100px;
  border-radius: 30px;
  margin: 30px auto;
  color: rgb(255, 255, 255);
  padding: 20px;
  display: flex;
  text-align: center;
}
.repo-name {
  color: #24292f;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: #ccc;
  width: 300px;
  border-radius: 10px;
  align-items: center;
}
.about-repo {
  width: 300px;
  margin: 10px auto;
  padding-bottom: 20px;
  line-height: 1.5;
  font-size: 12px;
}
.page-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2px;
  margin-bottom: 10px;
}
.prev-btn {
  margin-right: 5px;
  padding: 4px 10px;
  background-color: #24292f;
  color: rgb(255, 255, 255);
  font-weight: 700;
  cursor: pointer;
  border:none;
  border-radius: 5px;
}
.next-btn {
  padding: 4px 10px;
  background-color: #24292f;
  color: rgb(255, 255, 255);
  font-weight: 700;
  cursor: pointer;
  border:none;
  border-radius: 5px;
}
.view-repo-btn {
  cursor: pointer;
  border-radius: 30px;
  border:none;
  margin-left:5px;
}
</style>
