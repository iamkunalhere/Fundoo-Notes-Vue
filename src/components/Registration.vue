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
      <h2 style="color:green;">Fundoo Registaration</h2>
      <form class="register-form">
        <v-text-field label="Firstname" required v-model="firstName" autocomplete="off"></v-text-field>
        <v-text-field label="Lastname" required v-model="lastName" autocomplete="off"></v-text-field>
        <v-text-field label="Email" required v-model="email" autocomplete="off"></v-text-field>
        <v-text-field label="Password" required v-model="password" autocomplete="off"></v-text-field>
        <v-text-field label="Confirm Password" required autocomplete="off"></v-text-field>
        <v-btn type="submit" v-on:click="registerNewUser()">Register</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import api from "../service/userService";
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
    registerNewUser: function() {
      api.methods.registerUser({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        service: "service"
      });
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
