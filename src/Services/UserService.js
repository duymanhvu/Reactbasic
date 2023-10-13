// import axios from 'axios'
// import instance from './customize-axios';
import axios from './customize-axios'

const fetchAllUser = (page) => {
    return axios.get(`/api/aoma?page=${page}`);
    
}

const postCreateUser = (first_name,last_name,company,status,phone,date,email,website,gender,language) => {
  return axios.post("/api/aoma", {first_name,last_name,company,status,phone,date,email,website,gender,language});
}

const putUpdateUser = (first_name,last_name,company,status,phone,date,email,website,gender,language) => {
  return axios.put("/api/aoma", {first_name,last_name,company,status,phone,date,email,website,gender,language});

}

const deleteUser = (id) => {
  return axios.delete(`/api/aoma/${id}`);
}

// const loginApi = (username, password) => {
//   return axios.post("http://192.168.2.166:8000/api/login", {username, password});
// }

const apiUrl = 'http://192.168.2.166:8000/api/token/auth';
const loginApi = async (username, password) => {
  try {
    
    const response = await axios.post(
      `${apiUrl}`,
      {
        grant_type: 'password',
        refresh_token: "string",
        username: username,
        password: password,
        
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    
    console.log('Access token:', response.access_token);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }


};



export {fetchAllUser, postCreateUser, putUpdateUser, deleteUser, loginApi};

