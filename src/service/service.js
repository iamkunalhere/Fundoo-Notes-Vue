import axios from "axios";

const token = localStorage.getItem("token");

export default {
  postData(mainUrl, subUrl, Details) {
    return axios
      .post(mainUrl + subUrl + `${token}`, Details)
      .then(response => response)
      .catch(error => {
        return error;
      });
  },
  postDataBeforeLogin(mainUrl, subUrl, Details) {
    return axios
      .post(mainUrl + subUrl, Details)
      .then(response => response)
      .catch(error => {
        return error;
      });
  },
  postWithId(mainUrl, id, subUrl, Details) {
    return axios
      .post(mainUrl + id + subUrl + `${token}`, Details)
      .then(response => response)
      .catch(error => {
        return error;
      });
  },
  postWithoutDetails(mainUrl, subUrl) {
    return axios
      .post(mainUrl + subUrl + token)
      .then(response => response)
      .catch(error => {
        return error;
      });
  },
  getNotes(mainUrl, subUrl) {
    return axios
      .get(mainUrl + subUrl + `${token}`)
      .then(response => response.data)
      .catch(error => {
        return error;
      });
  }
};
