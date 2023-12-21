import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { startOfWeek, endOfWeek, addWeeks, startOfMonth, endOfMonth, addMonths, parseISO } from "date-fns";

import viLocale from "date-fns/locale/vi";

import { INIT_RANGEPICKER_TIME, KEY_OF_QUERY } from "@/shared/constants";

import { formatSearchQuery } from "@/shared/utils";

export interface IUseRangePicker {
  fnc: (option: string, range: { start_date?: any; end_date?: any }) => void;
}

const useRangePicker = ({ fnc }: IUseRangePicker) => {
  const today = new Date();
  const [searchParams] = useSearchParams();

  const [option, setOption] = useState<string>("now");
  const [range, setRange] = useState<{
    start_date?: any;
    end_date?: any;
  }>(INIT_RANGEPICKER_TIME);

  useEffect(() => {
    const query = formatSearchQuery(searchParams);

    if (query[KEY_OF_QUERY.range_type] && query[KEY_OF_QUERY.range_type].length > 0) {
      setOption(query[KEY_OF_QUERY.range_type]);
    }
    setRange({
      ...range,
      ...(query[KEY_OF_QUERY.start_date] &&
        !Number.isNaN(parseISO(query[KEY_OF_QUERY.start_date]).getTime()) && {
          start_date: parseISO(query[KEY_OF_QUERY.start_date]),
        }),
      ...(query[KEY_OF_QUERY.end_date] &&
        !Number.isNaN(parseISO(query[KEY_OF_QUERY.end_date]).getTime()) && {
          end_date: parseISO(query[KEY_OF_QUERY.end_date]),
        }),
    });
  }, [searchParams]);

  const validateOptionValue = (value: string) => {
    let result = range;
    switch (value) {
      case "now":
        result = {
          start_date: today,
          end_date: today,
        };

        break;

      // return result;

      case "this_week":
        result = {
          start_date: startOfWeek(today, { locale: viLocale }),
          end_date: endOfWeek(today, { locale: viLocale }),
        };

        break;

      case "last_week":
        result = {
          start_date: startOfWeek(addWeeks(today, -1), { locale: viLocale }),
          end_date: endOfWeek(addWeeks(today, -1), { locale: viLocale }),
        };

        break;

      case "this_month":
        result = { start_date: startOfMonth(today), end_date: endOfMonth(today) };

        break;

      case "last_month":
        result = { start_date: startOfMonth(addMonths(today, -1)), end_date: endOfMonth(addMonths(today, -1)) };

        break;

      default:
        break;
    }

    return result;
  };

  const handleOptions = (value: string) => {
    const range = validateOptionValue(value);
    setOption(value);
    setRange(range);
    fnc(value, range);
  };

  const handleDate = (day: any, name: string) => {
    setRange({
      ...range,
      [name]: day,
    });
    setOption("custom");

    fnc("custom", {
      ...range,
      [name]: day,
    });
  };

  return {
    option,
    range,
    handleOptions,
    handleDate,
  };
};

export default useRangePicker;
