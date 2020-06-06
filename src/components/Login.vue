<!-- 
@Description :
@file: Login
@overview: this is page for login user
@author: kunal jadhav
@since: 27/05/2020- Wednesday
-->
<template>
  <v-app>
    <div class="login-page">
      <div class="form">
        <h2 style="color:green;">Fundoo Login</h2>
        <form class="login-form">
          <v-text-field label="Email" required v-model="email" autocomplete="off"></v-text-field>
          <v-text-field label="Password" required v-model="password" autocomplete="off"></v-text-field>
          <div>
            <v-btn type="submit" v-on:click="loginUser()">Login</v-btn>
            <router-link to="/forgetPassword">Forgot Password?</router-link>
          </div>
          <br />
          <div>
            <p class="grey lighten-2 blue--text">
              Don't have an account?
              <router-link to="/registration"><u>Register here</u></router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </v-app>
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
