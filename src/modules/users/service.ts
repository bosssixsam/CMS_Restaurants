import { API_ENDPOINTS } from "@/apis";
import { axiosClient } from "@/shared";
import { formatQueryFilter } from "./utils";

export const USER_SERVICE = {
  getUserProfile: () => {
    return axiosClient.get(API_ENDPOINTS.GET_USER_PROFILE);
  },

  getUser: (params: Record<string, string>) => {
    const query = new URLSearchParams(formatQueryFilter(params) as Record<string, string>);
    return axiosClient.get(`${API_ENDPOINTS.USERS}?${query.toString()}`);
  },
};
