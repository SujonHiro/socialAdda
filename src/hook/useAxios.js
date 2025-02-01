import axios from "axios";

const useAxios = axios.create({
  baseURL: "https://social-api.thetechresolver.com/public/api/v1",
  withCredentials: false, // Cookie-based authentication enable করা
});

// Interceptor দিয়ে প্রতিটি request এর সাথে token add করা
useAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Token নেওয়া হচ্ছে

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
