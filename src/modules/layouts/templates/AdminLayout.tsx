import React, { useContext, useEffect, useState } from "react";

import { NotifyContext, useAppDispatch } from "@/shared";

import { SideBar } from "@/modules/layouts";

import { SIDEBAR_ITEMS } from "@/modules/layouts";

import { USER_SERVICE, userAction } from "@/modules/users";

export interface IAdminLayout {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  const dispatch = useAppDispatch();
  const [demension, setDemension] = useState(getWindowDimensions());
  const { api } = useContext(NotifyContext);

  useEffect(() => {
    getUser();
    function handleResize() {
      setDemension(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- handling data ----

  const getUser = async () => {
    try {
      const result = await USER_SERVICE.getUserProfile();

      if (result.data) {
        dispatch(userAction.setUser(result.data.data));
      }
    } catch (error: any) {
      api.error({
        message: error.message,
      });
    }
  };

  // --- handling component ---

  return (
    <div
      className={`min-h-screen bg-bg_grey flex transition-all duration-150 delay-75 ease-linear ${
        demension.width > 1000 ? "pl-[var(--sidebar-width)]" : "pl-0"
      }`}
    >
      <SideBar show={demension.width > 1000}>
        <div className="space-y-[12px]">
          {SIDEBAR_ITEMS.map((item: any, index: any) => {
            return (
              <SideBar.Item
                key={index}
                label={item.label}
                children={item.children}
                icon={item.icon}
                herf={item.herf! ?? ""}
              />
            );
          })}
        </div>
      </SideBar>

      <main className="w-full">{children}</main>
    </div>
  );
};

export default AdminLayout;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
