<template>
  <div class="login-page">
    <div class="form">
      <form class="login-form" onsubmit="return validate()">
        <input type="text" id="email" placeholder="Email" autocomplete="off" />
        <input type="text" id="password" placeholder="Password" autocomplete="off" />
        <button type="submit">Login</button>
        <br />
        <span id="returnMessage"></span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  }
};
</script>

<style scoped src="@/css/Form.css">
</style>