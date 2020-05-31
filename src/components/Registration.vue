<template>
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" id="firstname" required v-model="input.firstname" placeholder="Firstname" autocomplete="off" />
        <input type="text" id="lastname" placeholder="Lastname" autocomplete="off" />
        <input type="text" id="email" placeholder="Email" autocomplete="off" />
        <input type="text" id="password" placeholder="Password" autocomplete="off" />
        <input type="text" id="confirmPassword" placeholder="Type Password again" autocomplete="off" />
        <button type="submit">Register</button>
        <br />
        <span id="returnMessage"></span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        firstname:"",
      },
      response:""
    };
  }
};
</script>

<style scoped src="@/css/Form.css">
</style>
