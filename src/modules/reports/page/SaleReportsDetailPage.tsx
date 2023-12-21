import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { KEY_OF_QUERY, formatSearchQuery, useAppSelector } from "@/shared";

import { DetailDataTable } from "@/modules/reports/components";

import {
  DETAIL_DATA_TABLE,
  TABLE_DETAIL_SALE_BY_DATE,
  TABLE_DETAIL_SALE_BY_PRODUCT,
  TITLE_DETAIL,
} from "@/modules/reports/constant";
import { selectUser } from "@/modules/users";

// import { selectUser } from "@/modules/users";
import { REPORT_SERVICE, URL_DETAIL_LIST } from "@/modules/reports/service";

const SaleReportsDetailPage = () => {
  const { detailType } = useParams();
  const { restaurants } = useAppSelector(selectUser);
  const [params] = useSearchParams();
  const [detail, setDetail] = useState<any>(DETAIL_DATA_TABLE);
  const query = formatSearchQuery(params);
  const objTitle = useMemo(() => {
    switch (detailType) {
      case "by_date":
        if (restaurants.length > 0) {
          const value = (restaurants as Array<any>).find((item) => {
            return item.id === parseInt(query[KEY_OF_QUERY.restaurant]);
          });

          if (value) {
            return `Chi nhánh ${value.name}`;
          }

          return "";
        }
        return "";

      case "by_product": {
        return `Món ${detail.product?.name || ""}`;
      }

      default:
        return "";
    }
  }, [restaurants, params, detail]);

  useEffect(() => {
    loadData();
  }, []);

  const loadProduct = async () => {
    try {
      const result = await REPORT_SERVICE.getProductInfo(query.product_id || "");

      if (result.data) {
        return result.data.data;
      }
    } catch (error) {
      return undefined;
    }
  };

  const loadData = async () => {
    setDetail({
      ...detail,
      loading: true,
    });
    try {
      if (!detailType) {
        throw Error("Missing required params");
      }

      if (!URL_DETAIL_LIST[detailType as keyof typeof URL_DETAIL_LIST]) {
        throw Error("Params type is wrong");
      }
      const result = await REPORT_SERVICE.getReportSaleDetailList(detailType, query);
      const product = detailType === "by_product" ? await loadProduct() : undefined;

      if (result.data) {
        const value = result.data.data;

        setDetail({
          ...detail,
          loading: false,
          data: value.product_revenue_list ? value.product_revenue_list : value,
          product,
        });
      }
    } catch (error) {
      setDetail({
        ...detail,
        loading: false,
      });
      console.log(error);
    }
  };

  // config ---

  if (!detailType || !TITLE_DETAIL[detailType]) {
    return <div>Missing required field</div>;
  }

  return (
    <DetailDataTable
      special={detailType === "by_product" ? false : true}
      title={TITLE_DETAIL[detailType]}
      columns={detailType === "by_product" ? TABLE_DETAIL_SALE_BY_PRODUCT : TABLE_DETAIL_SALE_BY_DATE}
      requiredTitle={objTitle}
      data={detail.data}
    />
  );

  //   return <>{params.get("required") === null ? <div>Missing required field</div> : <DetailDataTable />}</>;
};

export default SaleReportsDetailPage;
