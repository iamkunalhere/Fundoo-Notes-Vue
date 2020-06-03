<template>
  <div class="login-page">
    <div class="form">
      <h2 style="color:green;">Enter Email</h2>
      <form class="login-form">
        <v-text-field label="Email" required v-model="email" autocomplete="off"></v-text-field>
        <v-btn type="submit" v-on:click="forgetPassword()">submit</v-btn>
      </form>
      <router-link to="/login">Back to Login</router-link>
    </div>
  </div>
</template>

<script>
import api from "../service/userService";

export default {
  name: "ForgetPassword",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        email: ""
      },
      response: ""
    };
  },
  methods: {
    forgetPassword: function() {
      api.methods.forgetPassword(this.email);
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
