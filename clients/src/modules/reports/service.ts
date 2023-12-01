import fileDownload from "js-file-download";
import { API_ENDPOINTS } from "@/apis";

import { axiosClient } from "@/shared";

import { utilsFormat } from "./utils";

const URL_LIST = {
  by_date: API_ENDPOINTS.SALE_REPORTS,
  by_product: API_ENDPOINTS.SALE_REPORTS_PRODUCTS,
};

export const URL_DETAIL_LIST = {
  by_date: API_ENDPOINTS.SALE_REPORTS_DETAIL,
  by_product: API_ENDPOINTS.SALE_REPORTS_PRODUCTS_DETAIL,
};

const EXPORT_URL_LIST = {
  sale_by_date_list: API_ENDPOINTS.EXPORT_SALE_DATE_LIST,
  sale_by_product_list: API_ENDPOINTS.EXPORT_SALE_PRODUCT_LIST,
};

// const exportFileDetailSaleDate = async (type: number, params: any) => {
//   const { start_date, restaurant_id } = utilsFormat(params);

//   const format_params = {
//     postfix: type,
//     date: start_date,
//     restaurant_id,
//   };
//   const query = new URLSearchParams(format_params as any);
//   const url = `${API_ENDPOINTS.EXPORT_SALE_DATE_LIST_DETAIL}?${query.toString()}`;

//   try {
//     const result = await axiosClient.get(url, {
//       responseType: "arraybuffer",
//     });
//     const _disposition = result.headers["content-disposition"];
//     const _startIndex = _disposition.indexOf("=") + 1;

//     if (_startIndex > 0 && _startIndex < _disposition.length) {
//       const filename = _disposition.slice(_disposition.indexOf("=") + 1, _disposition.length);
//       fileDownload(result.data, filename);
//       return result;
//     }
//   } catch (error: any) {
//     const errors = error?.response?.data?.error;
//     if (errors) {
//       // toast.error(
//       //   Array.isArray(errors)
//       //     ? errors.map((_error) => _error.message).join(", ")
//       //     : errors.message
//       // );
//     } else {
//       // toast.error(error?.message);
//     }
//     return {};
//   }
// };

const exportFile = async (url: string) => {
  try {
    const result = await axiosClient.get(url, {
      responseType: "arraybuffer",
    });
    const _disposition = result.headers["content-disposition"];
    const _startIndex = _disposition.indexOf("=") + 1;

    if (_startIndex > 0 && _startIndex < _disposition.length) {
      const filename = _disposition.slice(_disposition.indexOf("=") + 1, _disposition.length);
      fileDownload(result.data, filename);
      return result;
    }
  } catch (error: any) {
    const errors = error?.response?.data?.error;
    if (errors) {
      // toast.error(
      //   Array.isArray(errors)
      //     ? errors.map((_error) => _error.message).join(", ")
      //     : errors.message
      // );
    } else {
      // toast.error(error?.message);
    }
    return {};
  }
};

export const REPORT_SERVICE = {
  getReportSaleList: (type: string, params: { [key: string]: any }) => {
    const { start_date, end_date, restaurant_id } = utilsFormat(params);

    const format_params = {
      start_date,
      end_date,
      restaurant_id,
      // ...(type === "product" && keyword && keyword?.length > 0 && { keyword }),
    };

    const query = new URLSearchParams(format_params as any);

    const url = `${
      type && type in URL_LIST ? URL_LIST[type as keyof typeof URL_LIST] : API_ENDPOINTS.SALE_REPORTS
    }?${query.toString()}`;

    return axiosClient.get(url);
  },

  getReportSaleDetailList: (type: string, params: { [key: string]: any }) => {
    const { start_date, end_date, restaurant_id, product_id } = utilsFormat(params);

    const format_params = {
      [type === "by_date" ? "date" : "start_date"]: start_date,
      ...(type === "by_product" && { end_date }),
      ...(type === "by_product" && product_id && { product_id }),

      restaurant_id,
      // ...(type === "product" && keyword && keyword?.length > 0 && { keyword }),
    };

    const query = new URLSearchParams(format_params as any);

    const url = `${URL_DETAIL_LIST[type as keyof typeof URL_DETAIL_LIST]}?${query.toString()}`;

    return axiosClient.get(url);
  },

  getProductInfo: (id: string) => {
    return axiosClient.get(`${API_ENDPOINTS.PRODUCTS}/${id}`);
  },

  exportFile: (fileType: number, type: string, params: any) => {
    const { start_date, end_date, restaurant_id } = utilsFormat(params);

    const format_params = {
      postfix: fileType,
      start_date,
      end_date,
      restaurant_id,
    };

    console.log("type", type);

    const query = new URLSearchParams(format_params as any);
    const url = `${EXPORT_URL_LIST[type as keyof typeof EXPORT_URL_LIST]}?${query.toString()}`;

    return exportFile(url);
  },
};
