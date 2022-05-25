// http client abstraction
const axios = require("axios").default;

axios.interceptors.response.use(
  function (response) {
    return {
      data: response.data,
      success: true,
      message: "Success",
    };
  },
  function (error) {
    return Promise.reject({
      data: null,
      success: false,
      message: error.message,
    });
  }
);

export default {
  get: (...args) => axios.get(...args),
  post: (...args) => axios.post(...args),
  put: (...args) => axios.put(...args),
  delete: (...args) => axios.delete(...args),
};
