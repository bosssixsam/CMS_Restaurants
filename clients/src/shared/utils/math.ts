export const reduceItemValue = (arr: Array<any>, key: string) => {
  return arr
    .map((item) => {
      return parseFloat(item[key]);
    })
    .reduce((a: any, b: any) => a + b, 0);
};
