import { useSearchParams } from "react-router-dom";

export const useQueryHooks = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryObj = () => {
    return {
      ...Object.fromEntries(searchParams.entries()),
    };
  };

  const handleChangeQuery = (query: Record<string, string>) => {
    setSearchParams({
      ...getQueryObj(),
      ...query,
    });
  };
  const handleRemoveQuery = (name: string) => {
    const { [name]: _, ...query } = Object.fromEntries(searchParams.entries());
    setSearchParams({
      ...query,
    });
  };
  const resetQuery = () => {
    setSearchParams({});
  };

  return {
    getQueryObj,
    handleChangeQuery,
    handleRemoveQuery,
    resetQuery,
  };
};
