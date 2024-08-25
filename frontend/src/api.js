import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Change to your backend URL

export const fetchProducts = async (category) => {
    const response = await axios.get(`${API_URL}/products`, { params: { category } });
    return response.data;
};

export const fetchProductDetail = async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
};
