<template>
  <div id="app">
    <div id="nav">
      <div class="header">Fundoo Notes</div>
      <div class="links">
      <router-link to="/">Registration</router-link> |
      <router-link to="/login">Login</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<style scoped>
#nav {
  background-color:goldenrod;
  margin: 0;
  padding: 2.5%;
  font-weight: bold;
  font-size: 110%;
}
.header {
  float: left;
  width: 50%;
}
.links {
  float: right;
}
</style>