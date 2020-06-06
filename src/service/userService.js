import axios from "axios";

export default {
  methods: {
    registerUser: function(data) {
      axios
        .post(
          `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`,
          data
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    loginUser: function(userEmail, userPassword) {
      axios
        .post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, {
          email: userEmail,
          password: userPassword
        })
        .then(function(response) {
          const token = response.data.id;
          localStorage.setItem("token", token);
          console.log(response);
          console.log(token);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    forgetPassword: function(userEmail) {
      axios
        .post(`http://fundoonotes.incubation.bridgelabz.com/api/user/reset`, {
          email: userEmail
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    resetPassword: function(newPassword, token) {
      axios
        .post(
          `http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password?access_token=${token}`,
          { newPassword: newPassword }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
