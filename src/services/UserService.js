import axios from "axios";

const API_URL = "http://localhost:8080/"; // Adjust the URL to your API

class UserService {
  getUserProfile() {
    const id = localStorage.getItem("uid");
    return axios.get(`${API_URL}user/${id}`);
  }
}

export default new UserService();
