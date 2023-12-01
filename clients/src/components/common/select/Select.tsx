import { Select as AntSelect } from "antd";

export interface ISelect {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  showSearch?: boolean;
  defaultValue?: string | string[] | number | number[] | any;
  name?: string;
  value: any;
  options: Array<{ label: string; value: any }>;
  onSelect: (value: string | number | any) => void;
  onSearch?: (value: string) => void;
  filterOptions?: (input: string, option?: { label: string; value: string }) => boolean;
}

const Select = ({
  className = "",
  value,
  options,
  loading,
  showSearch,
  onSelect,
  filterOptions,
  onSearch,
}: ISelect) => {
  return (
    <AntSelect
      className={`${className}`}
      value={value}
      options={options}
      loading={loading}
      showSearch={showSearch}
      filterOption={filterOptions}
      onSearch={onSearch}
      onSelect={onSelect}
    />
  );
};

export default Select;
