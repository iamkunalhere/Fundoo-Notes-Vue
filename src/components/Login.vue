<!-- 
@Description :
@file: Login
@overview: this is page for login user
@author: kunal jadhav
@since: 27/05/2020- Wednesday
-->
<template>
  <div class="login-page">
    <div class="form">
      <h2 style="color:green;">Fundoo Login</h2>
      <form class="login-form">
        <v-text-field label="Email" required v-mod el="email" autocomplete="off"></v-text-field>
        <v-text-field label="Password" required v-model="password" autocomplete="off"></v-text-field>
        <v-btn type="submit" v-on:click="loginUser()">Login</v-btn>
      </form>
      <router-link to="/forgetPassword">Forgot Password</router-link>
    </div>
  </div>
</template>

<script>
import api from "../service/userService";

export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    loginUser: function() {
      api.methods.loginUser(this.email, this.password);
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
