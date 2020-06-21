import axios from "axios";

const url = `http://fundoonotes.incubation.bridgelabz.com/api`;

export default {
  methods: {
    registerUser: function(data) {
      return axios
        .post(url + `/user/userSignUp`, data)
        .then((response) => {
          return response;
        })
    },
    loginUser(loginInfo) {
      return axios
        .post(url + `/user/login`, loginInfo)
        .then((response) => {
          return response;
        })
    },
    logoutUser(token) {
      return axios
        .post(url + `/user/logout?access_token=${token}`)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    forgetPassword: function(userEmail) {
      return axios
        .post(url + `/user/reset`, {
          email: userEmail,
        })
        .then((response) => {
          return response;
        })
    },
    resetPassword: function(newPassword, token) {
      return axios
        .post(url + `/user/reset-password?access_token=${token}`, newPassword)
        .then((response) => {
          return response;
        })
    },
    addNote(noteDetail, token) {
      return axios
        .post(url + `/notes/addNotes?access_token=${token}`, noteDetail)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    getAllNotes(token) {
      return axios
        .get(url + `/notes/getNotesList?access_token=${token}`)
        .then((response) => response.data)
        .catch((error) => {
          return error;
        });
    },
    deleteNote(noteDetail,token) {
      return axios
        .post(url + `/notes/trashNotes?access_token=${token}`, noteDetail)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    getTrashNotes(token) {
      return axios
        .get(url + `/notes/getTrashNotesList?access_token=${token}`)
        .then((response) => response.data)
        .catch((error) => {
          return error;
        });
    },
    deleteNoteForever(noteDetail,token) {
      return axios
        .post(url + `/notes/deleteForeverNotes?access_token=${token}`, noteDetail)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
  },
};
