export const paginationFormat = (query: {
  [key: string | undefined]: string | undefined;
}) => {
  const { limit, page } = query;
  const limitPage =
    isNaN(parseInt(limit)) && parseInt(limit) >= 10 ? parseInt(limit) : 10;

  const pageNumber = parseInt(page as string) > 0 ? parseInt(page) : 1;

  return {
    limit: limitPage,
    page: pageNumber,
    skip: limitPage * (pageNumber - 1),
  };
};
