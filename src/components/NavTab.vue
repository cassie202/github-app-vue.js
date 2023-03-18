<template>
  <nav class="nav-bar">
    <img alt="github logo" src="./../assets/github.png" class="logo" />
    <input type="text" class="search-bar" placeholder="search or jump to..." />
    <div class="list-items">
      <a href="#">Pull requests</a>
      <a href="#">About</a>
      <a href="#">Issues</a>
      <a href="#">Codespaces</a>
      <a href="#">Marketplace</a>
      <a href="#">Explore</a>
    </div>
    <div class="icons">
      <img
        alt="notification icon"
        src="./../assets/notification-icon.jpg"
        class="notification-icon"
      />
      <img
        alt="addition icon"
        src="./../assets/add-icon.jpg"
        class="add-icon"
      />
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavTab",
  props: {
    msg: String,
  },
};
</script>
