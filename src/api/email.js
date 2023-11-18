import axios from "axios";

const backendURL = "http://localhost:3000";

export default axios.get({
  baseURL: backendURL,
});
