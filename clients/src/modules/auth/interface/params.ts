import { IUser } from "@/modules/users";

export interface ILoginParams {
  phone: string;
  password: string;
  remember?: number;
}

export interface IUSER_INFORMATION {
  loading: boolean;
  data: IUser | null;
}
