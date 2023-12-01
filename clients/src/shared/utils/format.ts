export const formatSearchQuery = (entries: any): { [key: string]: any } => {
  return Object.fromEntries([...entries]);
};

export function formatPrice(value: number) {
  return `${Math.round(value)}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
export function formatAddress(value: string) {
  return value;
}

export function flattenArray(data: Array<{ [key: string]: any }>) {
  let result: Array<any> = [];
  data.forEach(function (item) {
    if (Array.isArray(item.children)) {
      result = result.concat(flattenArray(item.children));
    } else {
      result.push(item);
    }
  });
  return result;
}
