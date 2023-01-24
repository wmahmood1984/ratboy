export const shortAddress = (str) => {
  if (str.length < 10) return str;
  return `${str.slice(0, 4)}...${str.slice(-4)}`;
};
export const shortAddressWithParams = (str, number) => {
  if (str.length < 36) return str;
  return `${str.slice(0, number)}...${str.slice(-number)}`;
};

export const toHex = (number) => {
  if (number) {
    return `0x${number.toString(16)}`;
  } else {
    return;
  }
};
