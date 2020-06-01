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
        <input type="text" id="email" required v-model="input.email" placeholder="Email" autocomplete="off" />
        <input type="text" id="password" required v-model="input.password" placeholder="Password" autocomplete="off" />
        <button type="submit" v-on:click="loginUser()">Login</button>
        <br />
        <span id="returnMessage"></span>
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
        .post(
          `http://fundoonotes.incubation.bridgelabz.com/api/user/login`,
         {
              email: this.input.email,
              password: this.input.password
          }
        )
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

<style scoped src="@/css/Form.css">
</style>