import service from "../service/service";

const url = `http://fundoonotes.incubation.bridgelabz.com/api/user`;
// const token = localStorage.getItem("token");

export default {
  methods: {
    registerUser: function(data) {
      return service.postData(url,`/userSignUp`,data);
    },
    loginUser(loginInfo) {
      return service.postData(url,`/login`,loginInfo);
    },
    logoutUser(token) {
      return service.postData(url,`/logout?access_token=${token}`);
    },
    forgetPassword: function(userEmail) {
      return service.postData(url,`/reset`,userEmail);
    },
    resetPassword: function(newPassword, token) {
      return service.postData(url,`/reset-password?access_token=${token}`,newPassword);
    },
  },
};  