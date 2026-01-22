import axios from "axios";

const BASE_URL = "http://localhost:5000/api/books";

export const searchBooks = (query) => {
  return axios.get(`${BASE_URL}/search?q=${query}`);
};

export const getBookDetails = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};
