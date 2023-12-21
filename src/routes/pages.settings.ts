import { IRouteItem, SITE_URL } from "@/shared";

import { LoginPage } from "@/modules/auth/pages";
import Home from "@/modules/Home";
import { SaleReportDetailPage, SaleReportPage } from "@/modules/reports";
import { UserListPage } from "@/modules/users/page";

export const PAGES_SETTING: Array<IRouteItem> = [
  {
    path: SITE_URL.HOME,
    element: Home,
    isPrivate: true,
  },

  {
    path: SITE_URL.USER_LIST,
    element: UserListPage,
    isPrivate: true,
  },

  {
    path: SITE_URL.REPORTS_SALE,
    element: SaleReportPage,
    isPrivate: true,
  },
  {
    path: `${SITE_URL.REPORTS_SALE}/:detailType`,
    element: SaleReportDetailPage,
    isPrivate: true,
  },
  {
    path: SITE_URL.LOGIN,
    element: LoginPage,
  },
];
