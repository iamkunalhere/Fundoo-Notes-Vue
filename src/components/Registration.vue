<!-- 
@Description :
@file: Registaration
@overview: this is page for register new user
@author: kunal jadhav
@since: 27/05/2020- Wednesday
-->
<template>
  <v-app>
    <div class="login-page">
      <v-card>
        <div class="form">
          <h2 style="color:green;">Fundoo Registration</h2>
          <form>
            <v-text-field
              label="Firstname"
              required
              v-model="firstName"
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              label="Lastname"
              required
              v-model="lastName"
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              label="Email"
              required
              v-model="email"
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              label="Password"
              required
              v-model="password"
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              required
              autocomplete="off"
            ></v-text-field>
            <router-link to="/">Login Now</router-link>
            <v-btn type="button" v-on:click="registerNewUser()">Register</v-btn>
          </form>
        </div>
      </v-card>
    </div>
    <v-snackbar v-model="successSnackbar">{{ successtext }}</v-snackbar>
    <v-snackbar v-model="failureSnackbar">{{ failuretext }}</v-snackbar>
  </v-app>
</template>

<script>
import api from "../service/userService";
export default {
  name: "Registration",
  props: {
    msg: String,
  },
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      successSnackbar: false,
      failureSnackbar: false,
      successtext: "Registered Successful",
      failuretext: "Registration Unsuccessful...!",
    };
  },
  methods: {
    registerNewUser: function() {
      const userDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        service: "advance",
      };
      api.methods
        .registerUser(userDetails)
        .then((response) => {
          if(response.status == 200) {
            this.successSnackbar = true;
          }
        })
        .catch((error) => {
          if(error) {
            this.failureSnackbar = true;
          }
        });
    },
  },
};
</script>

<style scoped src="@/css/Form.css"></style>
