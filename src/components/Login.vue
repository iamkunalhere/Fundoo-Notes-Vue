<!-- 
@Description :
@file: Login
@overview: this is page for login user
@author: kunal jadhav
@since: 27/05/2020- Wednesday
-->
<template>
  <v-app>
    <div class="login-page">
      <v-card>
      <div class="form">
        <h2 style="color:green;">Fundoo Login</h2>
        <form class="login-form">
          <v-text-field
            label="Email"
            required
            v-model="email"
            autocomplete="off"
          ></v-text-field>
          <v-text-field
            type="password"
            label="Password"
            required
            v-model="password"
            autocomplete="off"
          ></v-text-field>
          <div>
            <router-link to="/forgetPassword">Forgot Password?</router-link>
            <v-btn type="button" v-on:click="loginUser()">Login</v-btn>
          </div>
          <br />
          <div>
            <p class="grey lighten-2 blue--text">
              Don't have an account?
              <router-link to="/registration"><u>Register here</u></router-link>
            </p>
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
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      response: "",
    };
  },
  methods: {
    loginUser: function() {
          const loginInfo = {
          email: this.email,
          password: this.password,
        };
        console.log(loginInfo);
        api.methods.loginUser(loginInfo)
        .then(response => {
          if(response.status == 200) {
            localStorage.setItem("token",response.data.id);
            alert("login successful");
            this.$router.push("/navbar");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
