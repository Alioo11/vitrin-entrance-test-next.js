import axios from "axios";
import config from "../utils/config";

const { API_ENDPOINT } = config;

const customAxios = axios.create({
  baseURL: API_ENDPOINT,
});

export default customAxios;
