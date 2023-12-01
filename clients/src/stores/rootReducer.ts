import { authReducer } from "@/modules/auth";
import { userReducer } from "@/modules/users";

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
};
