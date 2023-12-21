import axios from "axios";
import { AUTH_CRED, ENV_CONFIG } from "@/shared";
// import { getAuthCredentials } from "@utils/auth-utils";
// import { ROUTES } from "@utils/routes";
// import Cookies from "js-cookie";
// import Router from "next/router";

const axiosClient = axios.create({
  baseURL: ENV_CONFIG.apiURL, // TODO: take this api URL from env
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
axiosClient.interceptors.request.use(
  (config: any) => {
    let value: any = undefined;
    const authCred = window.localStorage.getItem(AUTH_CRED);
    if (authCred) {
      value = JSON.parse(authCred);
    }

    config.headers = {
      ...config.headers,
      ...(value && { Authorization: `Bearer ${value.token}` }),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Change response data/error here
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errors = error.response?.data?.error;

    // console.log(error);

    // if (Array.isArray(errors)) {
    //   const isTokenExpired = errors.find((e) => e.code == 107) != null;
    //   if (isTokenExpired) {
    //     localStorage.removeItem("AUTH_CRED");
    //     Router.push(ROUTES.LOGIN);
    //   }
    // }

    // if (
    //   (error.response && error.response.status === 401) ||
    //   (error.response && error.response.status === 403) ||
    //   (error.response &&
    //     error.response.data.message === "CHAWKBAZAR_ERROR.NOT_AUTHORIZED")
    // ) {
    //   Cookies.remove("AUTH_CRED");
    //   Router.push(ROUTES.LOGIN);
    // }
    return Promise.reject(errors[0]);
  }
);

export default axiosClient;
