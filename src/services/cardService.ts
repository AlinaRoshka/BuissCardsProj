import axios from "axios";
import { Card } from "../interfaces/Card";
import _ from "lodash";
const api: string = process.env.REACT_APP_API || "";

// Get All Cards:

export const getCards = (): Promise<any> => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return axios.get(`${api}cards/random`);
  } else {
    return axios.get(`${api}cards`, {
      headers: { Authorization: token },
    });
  }
};
// Get Specific Card by ID:
export const getCard = (id: string): Promise<any> => {
  return axios.get(`${api}cards/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Get Card by User ID:
export const getCardById = (): Promise<any> => {
  return axios.get(`${api}cards/my-cards`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Get Cards by Name:
export const getCardsByName = (name: string): Promise<any> => {
  return axios.get(`${api}cards/search/${name}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Post New Card:
export const postCard = (card: Card): Promise<any> => {
  return axios.post(`${api}cards`, card, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Edit Card:
export const editCard = (card: Card): Promise<any> => {
  let body = _.omit(card, ["_id"]);
  return axios.put(`${api}cards/${card._id}`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

// Delete Card:
export const deleteCard = (id: string): Promise<any> => {
  console.log("Deleting card with id:", id);
  console.log("Full URL:", `${api}cards/${id}`);
  return axios.delete(`${api}cards/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};
