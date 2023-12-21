export const FILTER_HEAD = {
  restaurant: undefined,
  type: "",
  start_date: new Date(),
  end_date: new Date(),
  range_type: "",
};

export const DATA_TABLE = {
  loading: false,
  data: [],
};

export const DETAIL_DATA_TABLE = {
  ...DATA_TABLE,
  product: undefined,
};
