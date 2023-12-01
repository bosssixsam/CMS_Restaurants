import { useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { DATE_FORMAT, SITE_URL, formatSearchQuery } from "@/shared";

import { ReportDetailFilterHead } from "@/components";
import { ReportTable } from "@/components/table";

import { formartTableItemRender } from "@/modules/reports/utils";

export interface IDetailDataTable {
  className?: string;
  special?: boolean;
  title: string;
  requiredTitle: string;
  columns: Array<any>;
  data: Array<{ [key: string]: any }>;
}

const DetailDataTable = ({ className, title, requiredTitle, special, columns, data }: IDetailDataTable) => {
  const [params] = useSearchParams();
  const query = formatSearchQuery(params);
  const { detailType } = useParams();
  const title_data = useMemo(() => {
    return {
      start_date: (query.start_date && format(parseISO(query.start_date as string), DATE_FORMAT.DAY_MONTH_YEAR)) || "",
      end_date: (query.start_date && format(parseISO(query.start_date as string), DATE_FORMAT.DAY_MONTH_YEAR)) || "",
    };
  }, []);

  const date_title = special
    ? `ngày ${title_data.start_date}`
    : `từ ngày ${title_data.start_date} đến ngày ${title_data.end_date}`;

  // -- config ---

  const renderObj = (arr: Array<any>): Array<{ [key: string]: any }> => {
    return arr.map((item: any) => {
      return {
        ...item,
        ...(item.children && { children: renderObj(item.children) }),
        render: (data: string | number, obj: any, index: number) => {
          const value = formartTableItemRender(data, index, item.type);

          if (item.url) {
            return (
              <Link
                to={`${SITE_URL.ORDER}/${detailType === "by_product" ? obj.order_id : obj.receipt?.order_id}`}
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

  const format_columns = renderObj(columns);

  return (
    <div className={`${className} w-full`}>
      <ReportDetailFilterHead
        title={title}
        date_title={date_title}
        requiredTitle={requiredTitle}
        handleBack={() => {}}
      />
      <div className="pt-[20px] h-[90vh]">
        <div className="h-[90%] overflow-y-auto">
          <ReportTable
            className="h-[50vh]"
            rowKey={"id"}
            data={data}
            columns={format_columns}
            // summary={CustomSummary}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailDataTable;
