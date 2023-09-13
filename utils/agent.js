import axios from 'axios';

// local host
// const base_url = 'http://localhost:7000/api';

// backend
const base_url = 'http://localhost:7001/api/';

export const postLogin = async (url, body) => {
  try {
    console.log(`${base_url}${url}`);
    const response = await axios.post(`${base_url}${url}`, body);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postSignup = async (url, body) => {
  try {
    const response = await axios.post(`${base_url}${url}`, body);
    return response;
  } catch (err) {}
};
