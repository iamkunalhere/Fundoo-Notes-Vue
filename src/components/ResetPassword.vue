<template>
<v-app>
  <div class="login-page">
    <div class="form">
      <h2 style="color:green;">Reset Password</h2>
      <form class="login-form">
        <v-text-field
          label="Enter new Password"
          required
          v-model="password"
          autocomplete="off"
        ></v-text-field>
        <router-link to="/">Back to Login</router-link>
        <v-btn type="button" v-on:click="resetPassword()">submit</v-btn>
      </form>
    </div>
  </div>
  </v-app>
</template>

<script>
import api from "../service/userService";

export default {
  name: "ResetPassword",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        password: ""
      },
      response: ""
    };
  },
  methods: {
    resetPassword: function() {
      const credentials = {
        newPassword : this.password
      };
      const token = this.$route.params.token;
      console.log(token);
      api.methods.resetPassword(credentials, token);
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
