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
      <form class="login-form">
        <v-text-field label="Email" required v-model="email"></v-text-field>
        <v-text-field label="Password" required v-model="password"></v-text-field>
        <v-btn type="submit" v-on:click="loginUser()">Login</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      axios
        .post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, {
          email: this.email,
          password: this.password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
