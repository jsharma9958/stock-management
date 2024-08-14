import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", {
    username: email,
    password,
  });
  return response;
};

const register = async (username, email, gender, password) => {
  const response = await axios.post("http://localhost:8080/users", {
    name: username,
    email,
    gender,
    password,
  });
  console.log(response);

  return response;
};

const logout = () => {
  // Implement logout functionality
};

export default { login, register, logout };
