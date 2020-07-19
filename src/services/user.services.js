import axios from "axios";
import authHeader from './auth-header';

const API_URL = "";

const getPublicContext = () => {
    return axios.get(API_URL + "public");
}

const getUserBoard = () => {
    return axios.get(API_URL + "users", { headers: authHeader() });
}

const getPrivateBoard = () => {
    return axios.get(API_URL + "private", { headers: authHeader() });
}

export default {
    getPublicContext,
    getUserBoard,
    getPrivateBoard
}