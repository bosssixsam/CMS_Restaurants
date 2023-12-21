import { DATE_FORMAT, ORDER_TYPES, formatPrice } from "@/shared";
import { format, parseISO } from "date-fns";

export const utilsFormat = (query: {
  [key: string]: any;
}): {
  start_date: string;
  end_date: string;
  restaurant_id: number;
  customer_id?: string;
  product_id?: number;
  type?: string;
  keyword?: string;
} => {
  const { start_date, end_date, restaurant, id, product_id, type, keyword } = query;

  return {
    start_date:
      start_date && start_date !== null && !Number.isNaN(parseISO(start_date).getTime())
        ? start_date
        : format(Date.now(), DATE_FORMAT.DAY_QUERY_PARAMS),

    end_date:
      end_date && end_date !== null && !Number.isNaN(parseISO(end_date).getTime())
        ? end_date
        : format(Date.now(), DATE_FORMAT.DAY_QUERY_PARAMS),

    restaurant_id: restaurant ? parseInt(restaurant) : 5,
    ...(id && { customer_id: id }),
    ...(product_id && { product_id: parseInt(product_id) }),
    ...(type && type.length > 0 && typeof type === "string" && { type }),
    ...(keyword && { keyword }),
  };
};

export const formartTableItemRender = (
  value: number | string | { [key: string]: any },
  number: number,
  type?: string
) => {
  if (value instanceof Object) {
    switch (type) {
      case "time":
        if (value.start_time && value.end_time) {
          return `${format(parseISO(value.start_time), DATE_FORMAT.TIME)} - ${format(
            parseISO(value.end_time),
            DATE_FORMAT.TIME
          )}`;
        }
        break;

      case "table":
        if (value.receipt.order) {
          return value.receipt?.order?.tables[0]?.name || "";
        }
        break;

      default:
        break;
    }
  }

  if (value || value === 0) {
    const result = value as string | number;

    switch (type) {
      case "price":
        return formatPrice(typeof result === "string" ? parseFloat(result) : result);

      case "date":
        return format(typeof result === "string" ? parseISO(result) : result, DATE_FORMAT.DAY_MONTH_YEAR);

      case "number":
        return number;

      case "order":
        return ORDER_TYPES.find((item) => item.id === result)?.name;

      default:
        // return "hahah";
        return value;
    }
  }
};
