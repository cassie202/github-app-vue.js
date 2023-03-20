<template>
  <div class="container">
    <div class="error-container">
        <div class="error-text" >
    <h1>404</h1>
    <h3>Opps! Something went wrong...</h3>
</div>
    <button class="back-to-home" @click="()=>$router.push('/')">Back to Home</button>
  </div>
</div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
 .container{
    background-color:#24292F;
  margin: auto;
  padding: 0;
  color: #ffff;
  height: 100vh;
 }
 .error-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

 }
 .back-to-home{
    padding: 8px 15px;
    background-color: rgb(255, 255, 255);
    color: #24292f;
    font-weight: 700;
    cursor: pointer;
    margin: 100px 500px;
    border: none;
    border-radius: 5px;
 }
</style>
