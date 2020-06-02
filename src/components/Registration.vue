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
        <v-text-field label="Firstname" required v-model="firstName"></v-text-field>
        <v-text-field label="Lastname" required v-model="lastName"></v-text-field>
        <v-text-field label="Email" required v-model="email"></v-text-field>
        <v-text-field label="Password" required v-model="password"></v-text-field>
        <v-text-field label="Confirm Password" required></v-text-field>
        <v-btn type="submit" v-on:click="registerUser()">Register</v-btn>
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
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
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

<style scoped src="@/css/Form.css"></style>
