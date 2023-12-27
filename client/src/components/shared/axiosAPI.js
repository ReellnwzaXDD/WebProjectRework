import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getProducts = async (currentPage, sortType) => {
  
   const response = await axios.get(`${BASE_URL}/img/normal?page=${currentPage}&sortType=${sortType}`)
  // console.log(response.data);
  return response.data;
};