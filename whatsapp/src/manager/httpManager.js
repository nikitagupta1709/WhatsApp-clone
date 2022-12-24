import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const createUser = (userData) => {
    return axios.post(`${API_BASE_URL}/user`, userData);
}
const searchUser = (email) => {
   return axios.get(`${API_BASE_URL}/search-user?email=${email}`);
}
export const httpManager = {
    createUser,
    searchUser,
};