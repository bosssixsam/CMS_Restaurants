import { API_ENDPOINTS } from "@/apis";
import { axiosClient } from "@/shared";

export const USER_SERVICE = {
  getUserProfile: () => {
    return axiosClient.get(API_ENDPOINTS.GET_USER_PROFILE);
  },
};
