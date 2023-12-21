export interface IFilterHead {
  restaurant?: number;
  type: string;
  start_date?: string | Date | number | any;
  end_date?: string | Date | number | any;
  range_type: string;
}

export interface IData_Table_Page {
  loading: boolean;
  data: Array<any>;
  summary?: { [key: string]: any };
}
