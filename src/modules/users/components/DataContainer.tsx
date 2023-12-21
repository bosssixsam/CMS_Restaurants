import { useBoolean } from "@/shared";

import { SearchFilterHeader } from "@/components/listHeader";
import { Table, TableCell } from "@/components/table";

export interface DataContainerProps {
  columns: Array<any>;
  data: Array<any>;
}

const DataContainer = ({ columns, data }: DataContainerProps) => {
  const { state: open, handleToggle } = useBoolean();

  // --- format/config ---

  const formatColumns = columns.map((item) => {
    // let Cell = TableCell.Cell;
    // switch (item.type) {
    //   case "check":
    //     break;

    //   default:
    //     break;
    // }

    return {
      ...item,
      title: item.title,
      render: (value: any) => {
        let Cell: any = TableCell.Cell;
        switch (item.type) {
          case "check":
            break;

          case "roles":
            Cell = TableCell.Role({ value, name: item.supportKey });

            return Cell;

          default:
            break;
        }
        return Cell({ value });
      },
      // onCell: Cell,
    };
  });

  return (
    <div>
      <SearchFilterHeader
        title="Nhân sự"
        toggle={open}
        onAddNew={() => {}}
        onSearch={() => {}}
        onToggle={handleToggle}
      />
      <Table scroll={{ x: "100%" }} sticky data={data} columns={formatColumns} />
    </div>
  );
};

export default DataContainer;
