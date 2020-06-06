<template>
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
        <v-btn type="submit" v-on:click="resetPassword()">submit</v-btn>
      </form>
      <router-link to="/login">Back to Login</router-link>
    </div>
  </div>
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
      api.methods.resetPassword(this.password, this.$route.params.token);
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
