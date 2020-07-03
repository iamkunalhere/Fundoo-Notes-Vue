import service from "../service/service.js";
require('dotenv').config();
const url = `http://fundoonotes.incubation.bridgelabz.com/api/user/`;

export default {
  methods: {
    registerUser(data) {
      return service.postDataBeforeLogin(url, `userSignUp`, data);
    },
    loginUser(loginInfo) {
      return service.postDataBeforeLogin(url, `login`, loginInfo);
    },
    logoutUser() {
      return service.postData(url, `logout?access_token=`);
    },
    forgetPassword(userEmail) {
      return service.postDataBeforeLogin(url, `reset`, userEmail);
    },
    resetPassword(newPassword) {
      return service.postData(url, `reset-password?access_token=`, newPassword);
    }
  }
};
