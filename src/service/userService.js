import axios from "axios";

const url = `http://fundoonotes.incubation.bridgelabz.com/api`;

export default {
  methods: {
    registerUser: function(data) {
      axios
        .post(
          url + `/user/userSignUp`,
          data
        )
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    loginUser(loginInfo) {
      return axios
        .post(url + `/user/login`,
          loginInfo
        )
        .then(response => { 
          return response;
        })
        .catch(error => {
          return error;
        })
    },
    forgetPassword: function(userEmail) {
      axios
        .post(url + `/user/reset`, {
          email: userEmail
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    resetPassword: function(newPassword, token) {
      console.log(newPassword);
      axios
        .post(
          url + `/user/reset-password?access_token=${token}`,
          newPassword
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
