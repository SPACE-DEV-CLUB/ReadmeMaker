export const modifyComponentValue = (arr: Array<any>, curIndex: number, newValue: any) => {
  return [...arr.slice(0, curIndex), newValue, ...arr.slice(curIndex + 1)];
};
