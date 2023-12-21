import { useEffect, useState } from "react";
import { useQueryHooks } from "@/shared";

import { DataContainer } from "@/modules/users/components";

import { LIST_USER_COLUMNS, USERLIST_DATA } from "@/modules/users/constant";
import { USER_SERVICE } from "@/modules/users";

const UserListPage = () => {
  //
  const { getQueryObj } = useQueryHooks();
  const query = getQueryObj();
  const [data, setData] = useState(USERLIST_DATA);

  useEffect(() => {
    loadData();
  }, [JSON.stringify(query)]);

  const loadData = async () => {
    setData({
      ...data,
      loading: true,
    });

    try {
      const result = await USER_SERVICE.getUser(query);

      if (result.data) {
        console.log("result", result.data);
        setData({
          ...data,
          loading: false,
          list: result.data.data.data,
        });
      }
    } catch (error) {
      setData({
        ...data,
        loading: false,
        list: [],
      });
    }
  };

  // const formatColumns = LIST_USER_COLUMNS.map((item) => {
  //   return {
  //     ...item,

  //     // setup title to t(item.title), title enforce to string
  //     // title: t('adfgfh')

  //   };
  // });

  return (
    <div className="px-[1.2rem]">
      <DataContainer key={"id"} columns={LIST_USER_COLUMNS} data={data.list} />
    </div>
  );
};

export default UserListPage;
