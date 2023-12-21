import { Nullable } from "@/shared/interfaces/shared";
import { Department } from "./department";
import { Permission } from "./permission";

export interface Role {
  id: number;
  title: string;
  department_id: number;
  department: Department;
  permissions: Array<Permission>;
  updated_at: Nullable<string>;
  deleted_at: Nullable<string>;
  created_at: Nullable<string>;
}
