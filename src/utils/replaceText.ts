// TODO: api에서 type 정해지면 any 수정
export const replaceText = (arr: Array<any>, curIndex: number, newValue: any) => {
  return [...arr.slice(0, curIndex), newValue, ...arr.slice(curIndex + 1)];
};
