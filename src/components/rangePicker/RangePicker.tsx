import { DATE_RANGE_OPTIONS } from "@/shared";

import { DatePicker, Select } from "@/components/common";

export interface IRangePicker {
  className?: string;
  option: string;
  range: {
    start_date?: Date | number;
    end_date?: Date | number;
  };
  handleOptions: (value: string) => void;
  handleDate: (day: any, name: string) => void;
}

const RangePicker = ({ className = "", option, range, handleOptions, handleDate }: IRangePicker) => {
  return (
    <div className={`${className} flex space-x-[12px]`}>
      <Select className="min-w-[150px]" value={option} options={DATE_RANGE_OPTIONS} onSelect={handleOptions} />
      <div className="flex items-center space-x-[10px]">
        <label className="text-[1.4rem]">Từ ngày</label>
        <DatePicker name="start_date" value={range.start_date} handleChange={handleDate} />
      </div>
      <div className="flex items-center space-x-[10px]">
        <label className="text-[1.4rem]">Đến ngày</label>
        <DatePicker name="end_date" value={range.end_date} handleChange={handleDate} />
      </div>
    </div>
  );
};

export default RangePicker;
