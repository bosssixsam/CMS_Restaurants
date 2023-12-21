import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { format, parseISO } from "date-fns";

import {
  DATE_FORMAT,
  KEY_OF_QUERY,
  SITE_URL,
  flattenArray,
  formatPrice,
  formatSearchQuery,
  reduceItemValue,
  useAppSelector,
} from "@/shared";

import { ReportFilterHead } from "@/components";
import { ReportTable } from "@/components/table";

import { IFilterHead } from "@/modules/reports/interfaces";
import { FILTER_HEAD, TYPE_LIST } from "@/modules/reports/constant";
import { selectUser } from "@/modules/users";

import { formartTableItemRender } from "@/modules/reports/utils";

export interface IDataTable {
  className?: string;
  summary?: { [key: string]: any };
  data: Array<any>;
  columns: Array<any>;
  exportFile: (fileType: number) => void;
}

const DataTable = ({ className = "", data, columns, summary, exportFile }: IDataTable) => {
  const { restaurants } = useAppSelector(selectUser);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterstate, setFilterState] = useState<IFilterHead>(FILTER_HEAD);
  const query = formatSearchQuery(searchParams);

  useEffect(() => {
    // const query = formatSearchQuery(searchParams);

    if (restaurants.length > 0) {
      setFilterState({
        ...filterstate,
        type: query.hasOwnProperty(KEY_OF_QUERY.type) ? query[KEY_OF_QUERY.type] : TYPE_LIST[0].value,
        ...(query.start_date && { start_date: parseISO(query.start_date) }),
        ...(query.end_date && { end_date: parseISO(query.end_date) }),
        ...(query.hasOwnProperty(KEY_OF_QUERY.restaurant)
          ? {
              restaurant: parseInt(query[KEY_OF_QUERY.restaurant]),
            }
          : { restaurant: restaurants[0].id }),
      });
    }
  }, [restaurants, searchParams]);

  // --- handling ---

  const updateQuery = (obj: { [key: string]: any }) => {
    const query = formatSearchQuery(searchParams);

    setSearchParams({
      ...query,
      ...obj,
    });
  };

  const handleType = (type: string) => {
    const query = formatSearchQuery(searchParams);

    setFilterState({
      ...filterstate,
      type,
    });
    setSearchParams({
      ...query,
      type,
    });
  };

  const handleRestaurant = (value: number) => {
    setFilterState({
      ...filterstate,
      restaurant: value,
    });

    updateQuery({ restaurant: `${value}` });
  };

  const filterOption = (input: string, option?: { label: string; value: string }) => {
    return (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  };

  const handleRangePicker = (
    option: string,
    range: {
      start_date?: Date;
      end_date?: Date;
    }
  ) => {
    setFilterState({
      ...filterstate,
      range_type: option,
      start_date: range.start_date,
      end_date: range.end_date,
    });
    updateQuery({
      ...(option.length > 0 && { [KEY_OF_QUERY.range_type]: option }),
      ...(range.start_date && { [KEY_OF_QUERY.start_date]: format(range.start_date, DATE_FORMAT.DAY_QUERY_PARAMS) }),
      ...(range.end_date && { [KEY_OF_QUERY.end_date]: format(range.end_date, DATE_FORMAT.DAY_QUERY_PARAMS) }),
    });
  };

  // --- config ---

  const renderObj = (arr: Array<any>): Array<{ [key: string]: any }> => {
    return arr.map((item: any) => {
      return {
        ...item,
        ...(item.children && { children: renderObj(item.children) }),
        render: (data: string | number, obj: any, index: number) => {
          const value = formartTableItemRender(data, index, item.type);

          if (item.url) {
            const bydate = new URLSearchParams({
              restaurant: `${filterstate.restaurant}`,
              start_date: format(filterstate.start_date, DATE_FORMAT.DAY_QUERY_PARAMS),
              end_date: format(filterstate.end_date, DATE_FORMAT.DAY_QUERY_PARAMS),
              ...(query.type === "by_product" && { product_id: obj.product_id }),
            }).toString();

            return (
              <Link
                to={`${SITE_URL.REPORTS_SALE}/${item.url}?${bydate}`}
                className="text-blue hover:text-blue hover:underline"
              >
                {value}
              </Link>
            );
          }

          return value;
        },
      };
    });
  };

  const restaurants_options = restaurants.map((item: any) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

  const format_columns = renderObj(columns);

  const CustomSummary = (data: any) => {
    const summaray_arr = flattenArray(columns);

    return (
      <tr>
        {summaray_arr.map((item, index) => {
          const value = reduceItemValue(data, item.key);
          return (
            <td key={index} className="text-right">
              {summary ? (
                item.summary ? (
                  <span className="font-medium">
                    {item.type === "price" ? formatPrice(summary[item.key]) : summary[item.key]}
                  </span>
                ) : (
                  "-"
                )
              ) : item.summary ? (
                <span className="font-medium">{item.type === "price" ? formatPrice(value) : value}</span>
              ) : (
                "-"
              )}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div className={`${className} w-full`}>
      <ReportFilterHead
        filter_state={filterstate}
        types_list={TYPE_LIST}
        restaurants={restaurants_options}
        handleRestaurant={handleRestaurant}
        filterRestaurant={filterOption}
        handlePicker={handleRangePicker}
        handleType={handleType}
        exportFile={exportFile}
      />
      <div className="pt-[20px] h-[90vh]">
        <div className="h-[90%] overflow-y-auto">
          <ReportTable
            className="h-[50vh]"
            rowKey={query.type === "by_product" ? "product_id" : "id"}
            data={data}
            columns={format_columns}
            summary={CustomSummary}
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
