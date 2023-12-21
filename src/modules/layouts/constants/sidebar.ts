import { SITE_URL } from "@/shared";

export const SIDEBAR_ITEMS = [
  {
    label: "Quản lý nhà hàng",
    icon: "UsersIcon",
    children: [
      {
        label: "Quản lý nhân sự",
        herf: SITE_URL.USER_LIST,
      },
    ],
  },
  {
    label: "Báo cáo",
    icon: "ReportIcon",
    children: [
      {
        label: "Báo cáo công nợ",
        herf: SITE_URL.REPORTS_DEBTS,
      },
      {
        label: "Báo cáo bán hàng",
        herf: SITE_URL.REPORTS_SALE,
      },
      {
        label: "Báo cáo hủy/trả",
        herf: SITE_URL.REPORT_RETURN_PRODUCTS,
      },
    ],
  },
];
