// import { ListParams } from "@/shared";
import { UserFilterParams } from "@/modules/users/interfaces";

import { DEFAULT_LIMIT, DEFAULT_PAGE, DEFAULT_SORT, DEFAULT_SORTKEY, USER_KEYS } from "@/modules/users/constant";

export const formatQueryFilter = (query: Record<string, string>): UserFilterParams => {
  const {
    [USER_KEYS.PAGE]: page,
    [USER_KEYS.SIZE]: limit,
    [USER_KEYS.SEARCH]: name,
    [USER_KEYS.DEPARTMENT]: department_id,
    [USER_KEYS.RESTAURANT]: restaurant_id,
    [USER_KEYS.SORT_BY]: sort_key,
    [USER_KEYS.SORT_VALUE]: sort_value,
  } = query;

  return {
    name: name ?? "",
    page: page && Number.isNaN(Number(page)) ? page : `${DEFAULT_PAGE}`,
    limit: limit && Number.isNaN(Number(limit)) ? limit : `${DEFAULT_LIMIT}`,
    ...(department_id && Number.isNaN(Number(department_id)) && { department_id }),
    ...(restaurant_id && Number.isNaN(Number(restaurant_id)) && { restaurant_id }),
    sort_key: sort_key ?? DEFAULT_SORTKEY,
    sort_value: sort_value ?? DEFAULT_SORT,
  };
};
