/**
 * File creation and exportation module axios not inluided en app, not yet. Juste for services
 */
import type { AxiosInstance } from "axios";
import axios from "axios";

const axiosClient: AxiosInstance = axios.create({
  timeout: 1200,
  withCredentials: false,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-type": "application/json",
    'X-Requested-With': 'XMLHttpRequest'
  },
})

// request
axiosClient.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response
axiosClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosClient