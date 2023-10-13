import axios from "axios";

const instance = axios.create({
    baseURL: 'https://6524edfd67cfb1e59ce6407f.mockapi.io',
  
   
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : {statusCode: response.status}
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = {};
    if (error.response) {
      // Request made and server responded
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;

    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      //something happened in setting up the request that triggered and the response
      console.log('Error', error.message)
    }

    return res;
    // return Promise.reject(error);
  });

export default instance;