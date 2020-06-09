import axios from "axios";

const url = `http://fundoonotes.incubation.bridgelabz.com/api`;

export default {
  methods: {
    registerUser: function(data) {
      console.log(data,"data of register");
      axios
        .post(
          url + `/user/userSignUp`,
          data
        )
        .then(function(response) {
          console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    loginUser(loginInfo) {
      console.log(loginInfo)
      axios
        .post(url + `/user/login`,loginInfo)
        .then(function(response) { 
           console.log(response);
        })
         .catch(e => {
           console.log(e);
         });
    },
    forgetPassword: function(userEmail) {
      axios
        .post(url + `/user/reset`, {
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
      console.log(newPassword);
      axios
        .post(
          url + `/user/reset-password?access_token=${token}`,
          newPassword
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
