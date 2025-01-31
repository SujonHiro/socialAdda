import axios from "axios";

const useAxios = axios.create({
  baseURL: "https://social-api.thetechresolver.com/public/api/v1",
  withCredentials: true,
});

export default useAxios;
