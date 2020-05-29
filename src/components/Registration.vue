<template>
  <div class="container">
    <div class="form">
      <form>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Register</button>
      </form>
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
.form{
    position: relative;
    width: 70%;
    margin: auto;
    padding: 10%;
    text-align: center;
}
.form input{
    width: 30%;
}
</style>
