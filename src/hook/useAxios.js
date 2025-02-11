import axios from "axios";

const useAxios = axios.create({
  baseURL: "https://social-api.thetechresolver.com/public/api/v1",
  withCredentials: false,
});

useAxios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("authToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default useAxios;
