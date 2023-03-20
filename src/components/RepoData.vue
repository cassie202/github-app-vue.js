<template >
  <div class="main-container">
      <div class="container" v-if="repo">
        <div class="single-repo">
          <div class="name-display">
         <h1 class="single-repo-name">{{repo?.name}}</h1>
         <div class="public-btn">
         <button>{{repo?.visibility}}</button>
        </div>
        </div> 
        <p>{{ repo?.id }}</p>
        <p>{{ repo?.node_id }}</p>
         <p>{{repo?.full_name}}</p>
         <p>{{ repo?.forks }}</p>
        </div>
      </div>     
      <h3 class="wrong--id" v-else>This Id does not exist</h3>
      <button class="back-to-home" @click="()=>$router.push('/')">Back to Home</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RepoData",
  props: {
    msg: String,
  },
  data(){
    return{
      repo : {}
    }
  },
  methods:{
    async fetchRepo(){
      try {
      const {data} = await axios.get(
        "https://api.github.com/users/cassie202/repos"
      );
      const singleRepo =data.find((repo) => repo.id === parseInt( this.$route.params.id))
this.repo = singleRepo
    } catch (error) {
      console.log(error);
    }
    }
  },
  mounted(){
    this.fetchRepo()
  }
};

</script>

<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap");

.main-container{
  background-color:#24292F;
  height: 100vh;
}
.container{
  margin: auto;
  padding: 0;
  color: #ffff;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.single-repo{
 width: 700px;
 margin: 0 auto;
}
.name-display{
  display:flex;
  flex-direction: row;
}
.single-repo-name{
  margin-right: 10px;
}
.public-btn{
   padding: 5px 10px;
   cursor: pointer;
   margin-bottom: 0;
}
.back-to-home{
  padding: 9px 15px;
  background-color: #F6F8FA; 
  color: #24292f;
  font-weight: 700;
  cursor: pointer;
  margin: 50px 500px;
  border-radius: 5px;
  border: none;
}
.wrong--id{
 margin: 0;
 padding: 0;
 color: #ffff;
 text-align:center;
 
}
</style>
