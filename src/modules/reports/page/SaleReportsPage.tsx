import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatSearchQuery } from "@/shared";

import { DataTable } from "@/modules/reports/components";

import { IData_Table_Page } from "@/modules/reports/interfaces";
import { DATA_TABLE, TABLE_SALE_BY_DATE, TABLE_SALE_BY_PRODUCT, TYPE_EXPORT_LIST } from "@/modules/reports/constant";

import { REPORT_SERVICE } from "@/modules/reports/service";

const SaleReports = () => {
  const [data, setData] = useState<IData_Table_Page>(DATA_TABLE);
  const [searchParams] = useSearchParams();
  const query = formatSearchQuery(searchParams);

  useEffect(() => {
    loadData(query);
  }, [searchParams]);

  const loadData = async (query: { [key: string]: string }) => {
    setData({
      ...data,
      loading: true,
      data: [],
      summary: undefined,
    });
    try {
      const result = await REPORT_SERVICE.getReportSaleList(query.type, query);

      if (result.data) {
        const value = result.data.data;
        setData({
          ...data,
          loading: false,
          data: value.product_revenue_list ? value.product_revenue_list : value,
          summary: value.product_revenue_statistic,
        });
      }
    } catch (error) {
      setData({
        ...data,
        loading: false,
      });
    }
  };

  const exportFile = async (fileType: number) => {
    const urlType =
      typeof query.type === "string" && TYPE_EXPORT_LIST[query.type as keyof typeof TYPE_EXPORT_LIST]
        ? TYPE_EXPORT_LIST[query.type as keyof typeof TYPE_EXPORT_LIST]
        : TYPE_EXPORT_LIST.by_date;

    try {
      const resullt = await REPORT_SERVICE.exportFile(fileType, urlType, query);

      if (resullt) {
        console.log("hehe");
      }
    } catch (error) {}
  };

  return (
    <DataTable
      className="p-[20px] min-h-screen"
      data={data.data}
      columns={query.type === "by_product" ? TABLE_SALE_BY_PRODUCT : TABLE_SALE_BY_DATE}
      summary={data.summary}
      exportFile={exportFile}
    />
  );
};

export default SaleReports;
