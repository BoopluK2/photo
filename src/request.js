import axios from 'axios';

const apiUrl = window.env.REACT_APP_API_URL;
const apiToken = window.env.REACT_APP_API_TOKEN;


export const request = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: 'bearer ' + apiToken,
  },
});
