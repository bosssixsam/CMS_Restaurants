import { Nullable } from "@/shared/interfaces/shared";

export interface Department {
  id: number;
  name: string;
  updated_at: Nullable<string>;
  deleted_at: Nullable<string>;
  created_at: Nullable<string>;
}
