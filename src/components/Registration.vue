<template>
  <div class="container">
    <div class="fields">
      <input type="text" placeholder="Firstname" />
      <input type="text" placeholder="Lastname" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Register</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    display: flex;
    justify-content: center;
}
</style>
