// TODO: api에서 type 정해지면 any 수정
export const removeComponent = (arr: Array<any>, curIndex: number) => {
  return [...arr.slice(0, curIndex), ...arr.slice(curIndex + 1)];
};
