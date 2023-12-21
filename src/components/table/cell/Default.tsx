import { object } from "yup";

export interface DefaultCellProps {
  className?: string;
  value: string | number | object | Array<any>;
}

const DefaultCell = ({ value }: DefaultCellProps) => {
  if (Array.isArray(value) || value instanceof object) {
    return <div></div>;
  }

  return <div>{value as string}</div>;
};

export default DefaultCell;
