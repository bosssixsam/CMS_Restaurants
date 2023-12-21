import { ListParams } from "@/shared";

export interface UserFilterParams extends ListParams {
  department_id?: string;
  restaurant_id?: string;
  sort_key?: string;
  sort_value?: string;
}
