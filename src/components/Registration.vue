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
    
    <div class="form">
      
      <h2 style="color:green;">Fundoo Registration</h2> 
      <form>
        <v-text-field label="Firstname" required v-model="firstName" autocomplete="off"></v-text-field>
        <v-text-field label="Lastname" required v-model="lastName" autocomplete="off"></v-text-field>
        <v-text-field label="Email" required v-model="email" autocomplete="off"></v-text-field>
        <v-text-field label="Password" required v-model="password" autocomplete="off"></v-text-field>
        <v-text-field label="Confirm Password" required autocomplete="off"></v-text-field>
        <router-link to="/">Login Now</router-link>
        <v-btn type="button" v-on:click="registerNewUser()">Register</v-btn>        
      </form>
      
    </div>    
  </div>
  </v-app>
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
      const userDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        service: "service"
      };
      const request = api.methods.registerUser(userDetails);
      console.log(request.statusCode);
      fetch(request)
      .then(function(response) {
       console.log(response.status)
      });
    }
  }
};
</script>

<style scoped src="@/css/Form.css"></style>
