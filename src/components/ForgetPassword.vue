<template>
<v-app>
  <div class="login-page">
    <v-card>
    <div class="form">
      <h2 style="color:green;">Enter Email</h2>
      <form class="login-form">
        <v-text-field
          label="Email"
          required
          v-model="email"
          autocomplete="off"
        ></v-text-field>
        <div>
        <router-link to="/">Back to Login</router-link>
        <v-btn type="button" v-on:click="forgetPassword()">submit</v-btn>
        </div>
      </form>  
    </div>
    </v-card>
  </div>
  </v-app>
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
