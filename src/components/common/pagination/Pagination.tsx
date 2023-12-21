import { cn } from "@/shared";
import { Pagination as AntPagination } from "antd";

export interface PaginationProps {
  className?: string;
  current: number;
}

const Pagination = ({ className, current }: PaginationProps) => {
  return <AntPagination className={cn(className)} current={current} />;
};

export default Pagination;
