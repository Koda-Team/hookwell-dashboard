import axios from "axios";

const backendURL = "https://html-to-image-1jxi.onrender.com";

export default axios.get({
  baseURL: backendURL,
});
