import axios from "axios";

import tokenAxiosInterceptor from "./_axios/axiosAuthTokenInterceptor";
import errorInterceptor from "./_axios/axiosErrorInterceptor";

export const axiosClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  errorInterceptor.onFulfilled,
  errorInterceptor.onRejected,
);

export const axiosClientWithAuth = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosClientWithAuth.interceptors.request.use(
  tokenAxiosInterceptor.onFulfilled,
  tokenAxiosInterceptor.onRejected,
);

axiosClientWithAuth.interceptors.response.use(
  errorInterceptor.onFulfilled,
  errorInterceptor.onRejected,
);
