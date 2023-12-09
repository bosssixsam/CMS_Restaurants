import { useRoutes } from "react-router";
import { notification } from "antd";

import { NotifyContext, configPages } from "@/shared";

import { PAGES_SETTING } from "./routes";
import { AdminLayout } from "./modules/layouts";

function App() {
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      <NotifyContext.Provider value={{ api }}>
        {contextHolder}
        {/* {useRoutes(configPages(PAGES_SETTING))} */}

        <AdminLayout></AdminLayout>
      </NotifyContext.Provider>
    </>
  );
}

export default App;
