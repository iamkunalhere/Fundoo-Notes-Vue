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
    <v-snackbar v-model="successSnackbar">{{ successtext }}</v-snackbar>
    <v-snackbar v-model="emptyFieldSnackbar">{{ emptyfieldtext }}</v-snackbar>
    <v-snackbar v-model="failureSnackbar">{{ failuretext }}</v-snackbar>
  </v-app>
</template>

<script>
import api from "../service/userService";

export default {
  name: "ForgetPassword",
  props: {
    msg: String,
  },
  data() {
    return {
      input: {
        email: "",
      },
      successSnackbar: false,
      emptyFieldSnackbar: false,
      failureSnackbar: false,
      successtext: "Email Sent..!",
      emptyfieldtext: "Email can't be empty...!",
      failuretext: "Invalid Details...!",
    };
  },
  methods: {
    forgetPassword: function() {
      if (this.email == null) {
        this.emptyFieldSnackbar = true;
      } 
      else {
        api.methods.forgetPassword(this.email)
          .then((response) => {
            if (response.status == 200) {
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
