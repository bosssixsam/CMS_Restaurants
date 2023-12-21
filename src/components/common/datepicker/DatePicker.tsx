// import type { DatePickerProps } from "antd";
import { DatePicker as AntDatePicker } from "antd";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";

export interface IDatePicker {
  className?: string;
  disabled?: boolean;
  value: any;
  name: string;
  handleChange: (date: any, name: string, date_string: string) => void;
}

const CustomDatePicker = AntDatePicker.generatePicker<Date>(dateFnsGenerateConfig);

const DatePicker = ({ className = "", disabled, value, name, handleChange }: IDatePicker) => {
  return (
    <CustomDatePicker
      className={`${className}`}
      value={value}
      disabled={disabled}
      onChange={(value, date) => handleChange(value, name, date)}
    />
  );
};

export default DatePicker;
