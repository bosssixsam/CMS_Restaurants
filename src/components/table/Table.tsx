import { cn } from "@/shared";
import { Table as AntTable } from "antd";
import { ColumnsType } from "antd/es/table";
import { AnyObject } from "yup";

export interface TableProps {
  className?: string;
  columns: ColumnsType<AnyObject>;
  data: Array<any>;
  [key: string]: any;
}

const Table = ({ className, columns, data, ...props }: TableProps) => {
  return <AntTable className={cn(className)} columns={columns} dataSource={data} {...props} />;
};

export default Table;
