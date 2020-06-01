<!-- 
@Description :
@file: Registaration
@overview: this is page for register new user
@author: kunal jadhav
@since: 27/05/2020- Wednesday
-->
<template>
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input
          type="text"
          id="firstName"
          required
          v-model="input.firstName"
          placeholder="Firstname"
          autocomplete="off"
        />
        <input type="text" id="lastName" required v-model="input.lastName" placeholder="Lastname" autocomplete="off" />
        <input type="text" id="email" v-model="input.email" placeholder="Email" autocomplete="off" />
        <input type="text" id="password" required v-model="input.password" placeholder="Password" autocomplete="off" />
        <input
          type="text"
          id="confirmPassword"
          required
          placeholder="Type Password again"
          autocomplete="off"
        />
        <button type="submit" v-on:click="registerUser()">Register</button>
        <br />
        <span id="returnMessage"></span>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    registerUser: function() {
      axios
        .post(
          `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`,
         {
              firstName: this.input.firstName,
              lastName: this.input.lastName,
              email: this.input.email,
              password: this.input.password,
              service: "service"
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
