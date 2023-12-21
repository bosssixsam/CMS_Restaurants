import { Button, Select } from "@/components/common";
import { RangePicker } from "@/components/rangePicker";

import useRangePicker from "@/shared/hooks/useRangePicker";

export interface IReportFilterHead {
  className?: string;
  filter_state: {
    restaurant?: number;
    type: string;
  };
  types_list: Array<{ label: string; value: string }>;
  restaurants: Array<{ label: string; value: string }>;
  filterRestaurant: (input: string, option?: { label: string; value: string }) => boolean;
  handleRestaurant: (value: number) => void;
  handleType: (value: string) => void;
  handlePicker: (option: string, range: { start_date?: any; end_date?: any }) => void;
  exportFile: (fileType: number) => void;
}
const FilterHead = ({
  className = "",
  filter_state,
  restaurants,
  types_list,
  handleType,
  handleRestaurant,
  filterRestaurant,
  handlePicker,
  exportFile,
}: IReportFilterHead) => {
  const { option, range, handleOptions, handleDate } = useRangePicker({ fnc: handlePicker });

  return (
    <div className={`${className} space-y-[16px]`}>
      <div className="flex space-x-[16px]">
        <Select
          className="w-1/2 h-[40px] max-w-[340px]"
          name="type"
          value={filter_state.type}
          options={types_list}
          onSelect={handleType}
        />
        <Select
          className="w-1/2 h-[40px] max-w-[340px]"
          name="restaurant"
          showSearch={true}
          value={filter_state.restaurant}
          options={restaurants}
          onSelect={handleRestaurant}
          filterOptions={filterRestaurant}
        />
      </div>
      <div className="flex justify-between">
        <div className="w-[70%]">
          <RangePicker option={option} range={range} handleDate={handleDate} handleOptions={handleOptions} />
        </div>
        <div className="w-[30%] flex justify-end">
          <div className="flex space-x-[16px]">
            <Button
              className="bg-green text-white px-[12px] py-[8px] text-[1.4rem] font-medium hover:bg-green_hover transition-colors duration-100 ease-linear"
              handleClick={() => exportFile(2)}
            >
              Xuất CSV
            </Button>
            <Button
              className="bg-green text-white px-[12px] py-[8px] text-[1.4rem] font-medium hover:bg-green_hover transition-colors duration-100 ease-linear"
              handleClick={() => exportFile(1)}
            >
              Xuất Excel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHead;
