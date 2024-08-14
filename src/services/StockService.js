import axios from "axios";

const API_URL = "http://localhost:8080/stock/";

const getAllStocks = () => {
  return axios.get(API_URL + "get-all-stocks");
};

const getSpecificStock = (id) => {
  return axios.get(API_URL + "get-single-stock/" + id);
};

const getStock = (id) => {
  return axios.get(API_URL + "get-user-stocks/" + id);
};

const addStock = (stock) => {
  return axios.post(API_URL + "add-stock", stock);
};

const updateStock = (id, stock) => {
  return axios.put(API_URL + "update-stock/" + id, stock);
};

const deleteStock = (id) => {
  return axios.delete(API_URL + "delete-stock/" + id);
};

export default {
  getAllStocks,
  getSpecificStock,
  getStock,
  addStock,
  updateStock,
  deleteStock,
};
