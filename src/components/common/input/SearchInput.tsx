import Input, { InputProps } from "./Input";

export interface SearchInputProps extends InputProps {
  className?: string;
}

const SearchInput = ({ className, name, value, onChange, onPressEnter }: SearchInputProps) => {
  return <Input className={className} name={name} value={value} onChange={onChange} onPressEnter={onPressEnter} />;
};

export default SearchInput;
