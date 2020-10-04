import axios from "axios";

const instance = axios.create({
    baseURL: '...'      // The API (clound function) URL
});

export default instance;