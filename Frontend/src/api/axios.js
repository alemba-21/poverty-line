import axios from 'axios';
// import { json } from 'react-router-dom';

axios.defaults.baseURL = 'http://127.0.0.1:5000';

try {
    axios.defaults.headers.common = {
        Authorization: `bearer ${
        localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') || undefined) : null
    }`}
} catch (error) { }

export default axios