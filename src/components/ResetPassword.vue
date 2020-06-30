<template>
  <v-app>
    <div class="login-page">
      <v-card>
        <div class="form">
          <h2 style="color:green;">Enter New Password</h2>
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
      </v-card>
    </div>
    <v-snackbar v-model="successSnackbar">{{ successtext }}</v-snackbar>
    <v-snackbar v-model="emptyFieldSnackbar">{{ emptyfieldtext }}</v-snackbar>
  </v-app>
</template>

<script>
import api from "../service/userService";

export default {
  name: "ResetPassword",
  props: {
    msg: String,
  },
  data() {
    return {
      input: {
        password: "",
      },
      successSnackbar: false,
      emptyFieldSnackbar: false,
      successtext: "Password Changed Successfully..!",
      emptyfieldtext: "New Password can't be empty...!",
    };
  },
  methods: {
    resetPassword: function() {
      if (this.password == null) {
        this.emptyFieldSnackbar = true;
      } else {
        const credentials = {
          newPassword: this.password,
        };
        const token = this.$route.params.token;
        api.methods
          .resetPassword(credentials, token)
          .then((response) => {
            if (response.status == 204) {
              this.successSnackbar = true;
            }
          })
          .catch((error) => {
            if (error) {
              this.failureSnackbar = true;
            }
          });
      }
    },
  },
};
</script>

<style scoped src="@/css/Form.css"></style>
