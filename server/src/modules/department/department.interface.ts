import { Department } from 'entities';
import { IListParams } from 'modules/shared';

export interface IDepartmentParams extends IListParams {
  name?: string;
}

export interface IDepartment {
  page: number;
  first_page: number;
  last_page: number;
  total_page: number;
  total: number;
  prevPage: number;
  nextPage: number;
  data: Array<Department>;
}
