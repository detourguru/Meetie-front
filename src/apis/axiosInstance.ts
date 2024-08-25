import axios from "axios";

import { BASE_URL } from "@/constants/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
});
