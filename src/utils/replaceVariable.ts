export const replaceVariable = (str: string, mapObj: { [key: string]: string }): string => {
  const reg = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(reg, function (matched) {
    return mapObj[matched];
  });
};
