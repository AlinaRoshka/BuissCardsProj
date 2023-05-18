import axios from "axios";
import { User } from "../interfaces/User";
import jwt_decode from "jwt-decode";
const api: string = process.env.REACT_APP_API || "";

// User Registration
export const registerUser = (newUser: User): Promise<any> =>
  axios.post(`${api}register`, newUser);

// User Login
export const userLogin = (user: User): Promise<any> =>
  axios.post(`${api}login`, user);

// Get User Details
export const getUser = (): Promise<any> =>
  axios.get(`${api}profile`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// Edit User Details
export const editUser = (user: User): Promise<any> =>
  axios.put(`${api}profile`, user, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

// Get Payload from Token
export const getUserFromToken = (): User => {
  return jwt_decode(sessionStorage.getItem("token") as string) as User;
};

// Get User's Favorite Cards
export const getFavorites = (userId: string): Promise<any> => {
  return axios.get(`${api}profile/${userId}/favorites`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Add Card to User's Favorites
export const addToFavorites = (cardId: string): Promise<any> => {
  return axios.post(`${api}profile/favorites/${cardId}`, null, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Remove Card from User's Favorites
export const removeFromFavorites = (cardId: string): Promise<any> => {
  return axios.delete(`${api}profile/favorites/${cardId}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};
