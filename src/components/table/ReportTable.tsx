import { Table } from "antd";

export interface IReportTable {
  className?: string;
  rowKey?: string;
  pagination?: boolean | any;
  data: Array<any>;
  columns: Array<any>;
  summary?: (data: any) => JSX.Element;
}

const ReportTable = ({ className = "", pagination = false, rowKey, data, columns, summary }: IReportTable) => {
  return (
    <Table
      className={`${className} report_table`}
      rowKey={rowKey}
      dataSource={data}
      columns={columns}
      pagination={pagination}
      summary={summary && summary}
      scroll={{ x: "100%" }}
      sticky
    />
  );
};

export default ReportTable;
