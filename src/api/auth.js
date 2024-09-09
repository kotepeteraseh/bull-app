import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

// Register User
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// Login User
export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

// Get User Balance
export const getUserBalance = async (token) => {
  return await axios.get(`${API_URL}/balance`, {
    headers: {
      Authorization: token
    }
  });
};
